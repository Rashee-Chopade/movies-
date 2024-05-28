import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-bootstrap';
import PaginationButton from './Pagination';
import MovieCard from './MovieCard';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => {
                
                console.log("Result is "+data);
                if(data.results){
                    setPopularMovies(data.results);
                }
                setLoading(false);
            })
        }
        getMovies();
        getMovies(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

  return (
    <div className='bg-dark pt-4'>
      <div className="movie-grid container ">
        {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationButton currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} popularMovies={popularMovies} />
    </div>
  )
}

export default Home
