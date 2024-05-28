import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-bootstrap';
import MovieCard from './MovieCard';

const TopRated = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTopRatedMovies = async () => {
            setLoading(true);
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => {
                
                if(data.results){
                    setTopRatedMovies(data.results);
                    console.log(topRatedMovies);
                }
                setLoading(false);
            })
        }
        getTopRatedMovies();
    }, []);

  return (
    <div className=' bg-dark'>
      <div className="movie-grid container">
        {topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default TopRated
