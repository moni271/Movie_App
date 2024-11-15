import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import Slider from "react-slick"
import Navbar from "../Navbar/Navbar";

function MoviesList(props) {
  const { details } = props;
  
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop scrolling
    speed: 200, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto scroll slides
    autoplaySpeed: 1000, // Auto scroll delay (in ms)
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <>
    

<Navbar />
      
      

      <Slider {...settings} >
        {details?.map((movie) => {
          return (
            <div  className="SlideMovieList" key={movie.id}>
            <img src={movie.Poster} alt="Movies_picture"/>
            </div>
          );
        })}
      </Slider>

      <div className="movie_header">
        <h1>Movies</h1>
      </div>


      <div className="movies-list ">
        {details?.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.Title}
              image={movie.Poster}
              date={movie.Year}
            />
          );
        })}
      </div>
    </>
  );
}

export default MoviesList;
