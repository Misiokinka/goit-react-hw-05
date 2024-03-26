import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import css from "../../pages/MoviesPage/MoviesPage.module.css"
import { requestMovieByQuery } from "../../services/api";
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';


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
                setIsError(false);
            } catch (err) {
                setIsError(true)
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovieByQuery();
    }, [searchQuery]);




    const onSetSearchQuery = (searchTerm) => {
        if (searchTerm.trim().length === 0) {
            toast('Field cannot be empty')
            return;
        }
        setSearchParams({ query: searchTerm });
    };



    return (

        <>
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}

            <SearchForm
                searchQuery={searchQuery}
                onSetSearchQuery={onSetSearchQuery} />
            <MovieList movies={movies} />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',

                    }
                }} />
        </>
    )
}

export default MoviesPage;