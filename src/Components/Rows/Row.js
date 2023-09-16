import React, { useState, useEffect} from 'react'
import axios from '../../axios';
import "../Rows/Row.css"

const baseurl= "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=95a998361702f9f768a3eed3a1211f97');
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, ['https://api.themoviedb.org/3/tv/popular?api_key=95a998361702f9f768a3eed3a1211f97']);
    console.log(movies)
 
    return (
      <div className="row">
        <h2>{title}</h2> 
        <div className="row_posters">
          {movies.slice(0,10).map((movie) => (
            <img className='row_posters' src={`${baseurl}${movie.poster_path}`} alt={movie.name} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }


export default Row;