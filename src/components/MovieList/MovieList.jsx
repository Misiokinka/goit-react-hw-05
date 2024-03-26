import { Link, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"

const MovieList = (props) => {

  const { movies } = props
  const location = useLocation()

  return (

    <ul className={css.movieList}>

      {movies.map(movie => (
        <li key={movie.id}>

          <Link state={location} className={css.movieLink} to={`/movies/${movie.id}`}>{movie.title}</Link>

        </li>
      ))}
    </ul>
  )
}

export default MovieList