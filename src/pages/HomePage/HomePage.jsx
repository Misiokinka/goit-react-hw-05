import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { requestMovieTrending } from "../../services/api";
import { useState, useEffect } from 'react'
import css from "../../pages/HomePage/HomePage.module.css"

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await requestMovieTrending();

                setMovies(data.results);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);


    return (


        <div className={css.homePageWrapper}>
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
            <h1 className={css.homePageTitle}>Movie Trending</h1>
            <MovieList movies={movies} />
        </div>
    )

}

export default HomePage;