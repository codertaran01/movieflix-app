import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Movie.css'

const Movie = () => {
    const[movie,setMoviedetail]=useState();
    const {id} = useParams();

    useEffect(()=>{
         getData();   
    },[])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then((res)=> res.json())
        .then((data)=> setMoviedetail(data))
       }

  return (
    <>
      <div className="movie">
         <h1 className='heading'>{movie ? movie.original_title : ""}</h1>
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} alt='' />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='' />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie ? movie.original_title : ""}</div>
                        <div className="movie__tagline">{movie ? movie.tagline : ""}</div>
                        <div className="movie__rating">
                            {movie ? movie.vote_average: ""} <FontAwesomeIcon icon={faStar} style={{color:"white"}} />
                            <span className="movie__voteCount">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{movie ? movie.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                movie && movie.genres
                                ? 
                                movie.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div className='overviewText'>{movie ? movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    movie && movie.homepage && <a href={movie.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Watch <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
        </div>
    </>
  )
}

export default Movie
