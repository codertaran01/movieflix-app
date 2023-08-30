import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MovieList from './Components/MovieList';

const Home = () => {
    const [popularmovies,setPopularmovies]=useState([]);

    useEffect(()=> {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res)=> res.json())
      .then((data)=> setPopularmovies(data.results))
    },[])

  return (
    <>
      <div className='poster'>
        <Carousel
           showThumbs={false}
           autoPlay={true}
           transitionTime={3}
           infiniteLoop={true}
           showStatus={false}
        >
         {
            popularmovies.map(movie => (
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                  <div className='posterImage'>
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='' />
                  </div>
                  <div className='posterImage__overlay'>
                    <div className='posterImage__title'>{movie ? movie.original_title:""}</div>
                    <div className='posterImage__runtime'>
                       {movie ? movie.release_date: ""} 
                       <span className='posterImage__rating'>
                        {movie ? movie.vote_average: ""}
                        <FontAwesomeIcon icon={faStar} style={{color:"white"}} />
                       </span>
                    </div>
                    <div className='posterImage__description'>{movie ? movie.overview : ""}</div>
                  </div>
                </Link>
            ))
         }
        </Carousel>
        <MovieList/>
      </div>

      <footer>
        <div class="center">
            Copyright &copy; <span style={{color:"red"}}>MovieFlix</span>. All rights reserved!
        </div>
      </footer>

    </>
  )
}

export default Home
