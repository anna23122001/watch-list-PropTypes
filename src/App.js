import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'

import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import initialState from './model/initialState';

import './App.css';

function App() {

  const [toWatchMovies, setToWatchMovies] = useState(initialState);

  function saveToStorage(movies){
    localStorage.setItem('movies', JSON.stringify(movies))
  }

  useEffect(() => {
    setToWatchMovies(restoreMovies);
  }, [])

  function restoreMovies() {
    const data = localStorage.getItem('movies');
    return data ? JSON.parse(data) : initialState;
  }

  function toggleToWatch(id){
    const newWatchMovies = toWatchMovies.map((movie) => {
     return movie.id !== id ? movie : {...movie, isDone: !movie.isDone}
    });
     setToWatchMovies(newWatchMovies);
     saveToStorage(newWatchMovies)
  }

  function addNewMovie(movie) {
    movie.id = nanoid(12);
    const newWatchMovies = [...toWatchMovies, movie];
    setToWatchMovies(newWatchMovies);
    saveToStorage(newWatchMovies)
  }

  function deleteMovie(id){
    const newWatchMovies = toWatchMovies.filter((movie) => movie.id !== id)
    setToWatchMovies(newWatchMovies);
    saveToStorage(newWatchMovies)
  }

  return (
    <div className='container'>
      <WatchList
        movies={toWatchMovies}
        onToggle={toggleToWatch}
        onDelete={deleteMovie}
      />
      <WatchForm onSubmit={addNewMovie}/>

    </div>
  );
}

export default App;
