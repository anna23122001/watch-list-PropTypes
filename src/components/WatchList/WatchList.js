import React from 'react'
import WatchItem from '../WatchItem/WatchItem'
import PropTypes from 'prop-types';

import './WatchList.css'

function WatchList({movies, onToggle, onDelete}) {
  return (
    <div className='container-item'>
      {movies.map(movie => {
        return (
          <WatchItem 
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={onDelete}
          />
    
        )
    })}
    </div>
  )
}

WatchList.propTypes = {
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  movies: PropTypes.array,
}

WatchList.defaultProps = {
  movies: []
}

export default WatchList


