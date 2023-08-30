import React, { useEffect, useState } from 'react'
import './Card.css'
//import movie from '../Home'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({movie}) => {
    const[isloading,setIsloading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsloading(false)
        },1500)
    },[])

  return (
    <>
      {
        isloading
        ?
        <div className='cards'>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className='cards'>
                <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}  alt=''/>
                <div className='cards__overlay'>
                    <div className='card__title'>{movie?movie.original_title:""}</div>
                    <div className='card__runtime'>
                        {movie?movie.release_date:""}
                        <span className='card__rating'>{movie?movie.vote_average:""}<FontAwesomeIcon icon={faStar} style={{color:"white"}} /></span>
                    </div>
                </div>
            </div>
        </Link>
      }
    </>
  )
}

export default Card
