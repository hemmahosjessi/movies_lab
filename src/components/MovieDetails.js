import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from 'utils/urls'
import BackButton from './BackButton'


const MovieDetails = () => {
    const [movie, setMovie] = useState ([])
    const { id } = useParams()

    useEffect(() => {
        fetch(DETAILS_URL(id))
        .then(res => res.json())
        .then(data => setMovie(data)
    )}, [id])

    return (
        <div>
            <div key={movie.original_title}>
                <div className='background' style={{backgroundImage: movie.backdrop_path ? `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` : ''}} alt={movie.title}></div>
                <BackButton />
                <div className='posteranddetails'>
                    <img className='poster' src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                    <div className='details'>
                        <div className='title-score'>
                            {/* <h5>Spoken language {movie.budget}</h5> */}
                            <div className='meta'>
                                <p><span>Genre / </span> {movie?.genres?.map((genre) => genre.name + "  ")}</p>
                                <p><span>Length / </span>{movie.runtime} min</p>
                            </div>
                            <h1>{movie.original_title}</h1>
                            <h4 className='score'>Rating {movie.vote_average} / 10</h4>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieDetails 





