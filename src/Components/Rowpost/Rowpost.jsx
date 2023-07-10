import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'
import Youtube from 'react-youtube'
import { opts } from '../../urls'

export const Rowpost = (props) => {

  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
  const [mylist,setMylist] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovie(response.data.results)
    }).catch(error => {
      console.log('Something Error');
    })
  }, [])


  const handleMovieTrailer = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
    })
  }

  return (
    <div className='posters-row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((movies) => {
          return (

            <div
              className={props.small ? 'single_small_box_poster' : 'single_box_poster'}>


              <img onClick={() => handleMovieTrailer(movies.id)}
                className={props.small ? 'small-poster' : 'big_poster'}
                src={`${imageUrl + movies.backdrop_path}`} alt="poster-img" />

              <div className='poster_btn'>
                <i className="fa-solid fa-plus"></i><span>My List</span>
              </div>

            </div>
          )
        })}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}


