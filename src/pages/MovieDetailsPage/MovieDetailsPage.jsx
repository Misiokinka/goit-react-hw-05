import { NavLink, useParams, Outlet, useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import { requestMovieDetails } from "../../services/api";
import css from "../../pages/MovieDetailsPage/MovieDetailsPage.module.css"
import clsx from 'clsx';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const getNavLinkClassName = ({ isActive }) =>
    clsx(css.movieDetailsLink, { [css.active]: isActive })

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const location = useLocation()
    const backLinkRef = useRef(location.state ?? "/movies")

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
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
            
            <div className={css.movieDetailsWrapper}>

                <Link className={css.goBackLink} to={backLinkRef.current}>Go back</Link>

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
                        </ul>
                    </div>}
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