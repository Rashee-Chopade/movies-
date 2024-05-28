import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
    // const [query, setQuery] = useState('');
    // // const history = useHistory();

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     // history.push(`/search?query=${query}`);
    //   };
    const [movie, setMovie] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${movie}&page=1`)
         const json = await response.json();
         console.log(json);
         setMovie(json.Search);
     }

    useEffect(() => {
        getMovieRequest();
    }, [searchValue]);

    return (
        <>
            <div className='bg-dark pt-3'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand text-light" to="/">MovieDb</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/">Popular</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" to="/toprated">Top Rated</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" to='/upcoming'> Up Coming</NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                    {/* <SearchBar/> */}
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar