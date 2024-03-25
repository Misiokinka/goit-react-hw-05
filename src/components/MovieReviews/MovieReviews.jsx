import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { requestMovieReview } from "../../services/api";
import css from "./MovieReviews.module.css"


const MovieReviews = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchDataMovieReview() {
            try {
                setIsLoading(true);
                const data = await requestMovieReview(movieId);

                setMovie(data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDataMovieReview();
    }, [movieId]);

    return (

        <div className={css.movieReviewDescription}>

            {movie.results && movie.results.length > 0 ? (

                <ul className={css.movieReviewInfoList}>
                    {movie.results.map(result => (
                        <li className={css.movieReviewInfoItem} key={result.id}>
                            <h2 className={css.movieAuthorReview}>Author : {result.author}</h2>
                            <p className={css.movieTextReview}>{result.content}</p>
                        </li>
                    ))}
                </ul>

            ) : (
                <p className={css.movieTextNotFound}>We dont have any reviews for this movie</p>
            )}


        </div>


    )
}

export default MovieReviews;