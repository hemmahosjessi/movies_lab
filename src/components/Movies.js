import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MOVIES_URL } from 'utils/urls';
import BackToStartButton from './BackToStartButton';
import LoadingPage from './LoadingPage';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	fetch(MOVIES_URL)
	// 		.then((res) => res.json())
	// 		.then((data) => setMovies(data.results));
	// }, []);


    useEffect(() => {
        setLoading(true);
        fetch(MOVIES_URL)
        .then(res => res.json())
        .then((data) => {
            setTimeout(() => {
            setLoading(false)
            setMovies(data.results)
            }, 1200)
      })}, [])


    return (
        <>
        {loading && <LoadingPage />}
        <div className='top-area'>
        <BackToStartButton />
        </div>
        <section className='movie-container'>
            {movies.map((movie) => (
                <div key={movie.id} className='movie-item'>
                    <Link  to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.original_title}/>
                        <div className='overlay'>
                            <div className='text'>
                                <h3>{movie.original_title}</h3>
                                <h4>Relased {movie.release_date}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
               
))}
         </section>
         </>
         

    )
}



export default Movies














