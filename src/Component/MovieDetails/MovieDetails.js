import React from 'react'
import { useLocation } from 'react-router-dom'
import './MovieDetails.css'

function MovieDetails() {
  const location = useLocation();
  const {image,title,description} =location.state;
   

   
  return (
    <div className='movie-details'>
     <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
    </div>
  )
}

export default MovieDetails
