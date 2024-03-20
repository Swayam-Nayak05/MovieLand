import React from 'react'
import './App.css'
import MovieCard from './moviecard'
import { useEffect, useState } from 'react'
import SearchIcon from './search.svg'
const API_url = 'http://www.omdbapi.com?apikey=ac812cc0'
const App = () => {
    const [movies, setMovies] = React.useState([])
    const [searchterm,setsearchterm]=React.useState('')
    const searchmovies = async (e) => {
        const response = await fetch(`${API_url}&s=${e}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchmovies('Spiderman')
    }, []
    )
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder='Search'
                    value={searchterm}
                    onChange={(e) => setsearchterm(e.target.value) }
                />
                <img src={SearchIcon}
                    alt="Search"
                    onClick={() => searchmovies(searchterm)}
                />
            </div>
            {
                movies?.length > 0 ? (<div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    )
}
export default App