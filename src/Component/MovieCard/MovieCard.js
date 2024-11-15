import React, { useState } from 'react'
import './MovieCard.css'
import { useNavigate } from 'react-router-dom';


function MovieCard(props) {
    const {title,image,date,description}=props
    const navigate = useNavigate();
  

    const handelImageClick=()=>{
        navigate('/moviedetails', {state:{image,title,description}});
    } 
   
        
  return (

      <div className="movie-card">

      <img src={image} alt={title} className="movie-image" onClick={handelImageClick}/> 
    
    
      <h3 className='movie-title'>{title}</h3>
      <h4>Release_Year:{date}</h4>
    </div>
    
  )
}

export default MovieCard

