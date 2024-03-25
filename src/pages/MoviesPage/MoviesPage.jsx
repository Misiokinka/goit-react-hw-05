import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import css from "../../pages/MoviesPage/MoviesPage.module.css"
import { requestMovieByQuery } from "../../services/api";
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");


    useEffect(() => {
        if (searchQuery === null) return;

        async function fetchMovieByQuery() {
            try {
                setIsLoading(true);
                const data = await requestMovieByQuery(searchQuery);

                setMovies(data.results);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovieByQuery();
    }, [searchQuery]);




    const onSetSearchQuery = (searchTerm) => {
        if (searchTerm.trim().length === 0) {
            alert("Please enter a search term first!");
            return;
        }
        setSearchParams({ query: searchTerm });
    };



    return (

        <>
            <SearchForm
                searchQuery={searchQuery}
                onSetSearchQuery={onSetSearchQuery} />
            <MovieList movies={movies} />
          
        </>
    )
}

export default MoviesPage;