
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { requestMovieCast } from "../../services/api";
import css from "./MovieCast.module.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";


const MovieCast = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchDataMovieCast() {
            try {
                setIsLoading(true);
                const data = await requestMovieCast(movieId);

                setMovie(data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDataMovieCast();
    }, [movieId]);

    return (
        <div className={css.movieCastWrapper}>
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
            {movie &&
                <div className={css.movieCastDescription}>
                    <ul className={css.movieCastList}>
                        {movie.cast && movie.cast.map(cast => (
                            <li className={css.movieCastItem} key={cast.id}>
                                
                                    {cast.profile_path ? (
                                        <img className={css.movieCastImg} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="Actor Profile" />
                                    ) : (
                                        <img className={css.movieCastImg} src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" alt="Placeholder" />
                                    )}
                              
                                <div className={css.castInfo}>
                                    <p className={css.movieCastName}> {cast.name}</p>
                                    <p className={css.movieCastCharacter}>Character : {cast.character}</p>
                                </div> </li>
                        ))}
                    </ul>  </div>}


        </div>

    )
}

export default MovieCast;