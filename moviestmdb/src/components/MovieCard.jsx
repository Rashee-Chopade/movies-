import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div>
            <div>
                <div className="movie-card">
                    <NavLink to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='card-image' width='58%' />
                        <p className='h5 text-light pt-3'>{movie.title}</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
