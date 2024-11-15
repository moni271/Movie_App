
import './App.css';
import { useEffect, useState } from 'react';
import MoviesList from './Component/MoviesList/MoviesList';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom';
import MovieDetails from './Component/MovieDetails/MovieDetails';


function App() {

  const[Movies,setMovies]=useState();

  useEffect(()=>{

    const fetchData = async() => {
       await fetch('http://www.omdbapi.com/?s=star wars&apikey=4c6a18a5')
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.error(error))


    }

    fetchData();
  },[])


  return (
   <>
   Hello
   <Router>
    <Routes>
      <Route path ='/moviedetails' element={<MovieDetails/>}> </Route>
      <Route path ='/' element={<MoviesList details={Movies}/>}></Route>    
     
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
