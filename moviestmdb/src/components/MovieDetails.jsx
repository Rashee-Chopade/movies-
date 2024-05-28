import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastDetails from './CastDetails';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    // const [casts, setCasts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //console.log(id);
        const getMovieDetails = async (id) => {
            setLoading(true);
            console.log(id);
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
                .then((response) => //response.json())
                {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                      }
                      return response.json();
                })
                .then((data) => {
                    if (data.results) {
                        console.log(id);
                        setMovieDetails(data.results);
                        console.log(movieDetails);
                        console.log(movieDetails.title);
                    }
                    setLoading(false);
                })
                .catch((e) => {
                    console.error('There was a problem with the fetch operation:', e.message);
                    setLoading(false);
                })
        };
        getMovieDetails(id);
    }, [id]);

    // useEffect(() => {
    //     const getCast = async () => {
    //         setLoading(true);
    //         fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
    //         .then((response) => response.json)
    //         .then((data) => {
    //             if(data.cast){
    //                 setCasts(data.cast)
    //             }
    //             setLoading(false);
    //         })
    //     }
    //     getCast(id);
    // })

    const Loading = () => {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const Movie = () => {
        return (
            <div className="row bg-dark" key={id}>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
                        </div>
                        <div className="col-md-7">
                            <p className='h2'>{movieDetails.title}</p>
                        </div>
                    </div>
                </div>
                <CastDetails id={id}/>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                {loading ? <Loading /> : <Movie />}
            </div>
            {/* <div>
                    <div className="row" key={movieDetails.id}>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} width='20%' />
                                </div>
                                <div className="col-md-7">
                                    <p className='h2'>{movieDetails.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default MovieDetails
