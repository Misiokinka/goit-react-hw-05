import { NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import { requestMovieDetails } from "../../services/api";
import css from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css"
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
    clsx(css.movieDetailsLink, { [css.active]: isActive })

const MovieDetailsPage = () => {
    const { movieId } = useParams();


    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        async function fetchDataMovieDetails() {
            try {
                setIsLoading(true);
                const data = await requestMovieDetails(movieId);

                setMovie(data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchDataMovieDetails();
    }, [movieId]);

    return (
        <div >
            <div className={css.movieDetailsWrapper}>

                <div className={css.additionalInfoMovieWrapper}>

                    <img className={css.posterMovieImg} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />


                    {movie && <div className={css.movieDescription}>

                        <h1 className={css.movieDescriptionTitle}> {movie.title}</h1>
                        <h2 className={css.movieDescriptionOverview}> Overview  </h2>
                        <p className={css.movieDescriptionOverviewText}>{movie.overview}</p>
                        <h3 className={css.movieDescriptionGeners}>Geners</h3>
                        <ul className={css.genresList}>
                            {movie.genres && movie.genres.map(genre => (
                                <li className={css.genreItem} key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>  </div>}
                </div>

            </div>

            <div className={css.additionalInfoMovie}>
                <h2 className={css.additionalMovieText}>Additional information</h2>

                <div className={css.additionalMovieLinks}>
                    <NavLink className={getNavLinkClassName} to="cast">Cast</NavLink>
                    <NavLink className={getNavLinkClassName} to="reviews">Reviews</NavLink>
                    <Outlet /> </div>
            </div>
        </div>


    )
}

export default MovieDetailsPage;