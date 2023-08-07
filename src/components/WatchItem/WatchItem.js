import React from 'react'
import PropTypes from 'prop-types';

import './WatchItem.css'

function toggleBackground(movie) {
    return {
        backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
    }
}

function WatchItem({movie, onToggle, onDelete}) {

  function onMovieDelete(e){
    e.stopPropagation();
    onDelete(movie.id)
  }
  return (
     <div 
        className='watch-item'
        style={toggleBackground(movie)}
    onClick={() => onToggle(movie.id)}
      >
       <p className='content'>
          {movie.title} produced by {movie.director}
       </p>

       <span 
       className='delete-btn'
       onClick={onMovieDelete}>
          X
       </span>
    </div>
  )
}

   WatchItem.propTypes = {
      onToggle: PropTypes.func.isRequired,
      onDelete: PropTypes.func,
      movie: PropTypes.object,
   }

   WatchItem.defaultProps = {
      movie: {}
   }


export default WatchItem