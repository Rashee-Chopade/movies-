import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'
import CastDetails from './CastDetails';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true);
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
                .then((resp) => resp.json())
                .then((data) => {
                    if (data) {
                        setMovieDetails(data);
                        setGenres(data.genres);
                        // console.log(genres);
                    }
                    setLoading(false);
                })
        }
        getMovieDetails();
    }, [id]);

    return (
        <div key={id} className='bg-secondary pt-4'>
            <div className="container mt-4 bg-dark rounded">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} width='100%' />
                            </div>
                            <div className="col-md-9">
                                <p className='text-light h2'>{movieDetails.title}</p>
                                <p className='text-light fs-5 m-0'>Rating: {movieDetails.vote_average}</p>
                                <div className="cat d-flex">
                                    <p className='text-light fs-5 m-0 me-2'>{movieDetails.runtime} min</p>
                                    {genres.map((data) => (
                                        <p className='text-light d-flex p-1'>{data.name},</p>
                                    ))}
                                </div>
                                <p className='text-light fs-5 m-0'>Release Date: {movieDetails.release_date}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-light mt-3'><span className='fs-3 mt-2'>Overview</span> <br /> {movieDetails.overview}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt={movieDetails.title} width='100%' />
                    </div>
                </div>
            </div>
            <div className="container mt-4 bg-dark rounded">
                <div className='text-light display-6 pt-3 ps-3'>
                    Cast
                    <CastDetails id={id} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
