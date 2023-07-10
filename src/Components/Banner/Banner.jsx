import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'


const randomNumber= ()=> { return Math.floor(Math.random() * 21)}


function Banner() {
    const [movie, setMovie] = useState()


    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response);
            setMovie(response.data.results[randomNumber()])
        })
    },[])

    const handleMovieTrailer = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                const videoId = response.data.results[0].key;
                const url = `https://www.youtube.com/watch?v=${videoId}`
                window.open(url, '_blank')
            }
        })
    }

  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
            <div className='banner-buttons'>
                <button onClick={()=>handleMovieTrailer(movie.id)} className='button'><span><i className="fa-solid fa-play"></i></span>Play</button>
                <button className='button'><span><i className="fa-solid fa-plus"></i></span>  My list</button>
            </div>
            <p className='description'>{movie ? movie.overview : ''}</p>
        </div>
        <div className="fade-bottom">
            
        </div>

    </div>
  )
}

export default Banner