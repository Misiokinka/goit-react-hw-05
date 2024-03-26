import { Link } from 'react-router-dom';
import css from "../../pages/NotFoundPage/NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPageWrapper}>
      <h1 className={css.notFoundPageTitle}>404 - Not Found</h1>
      <p className={css.notFoundPageText}>The page you are looking for does not exist.</p>
      <Link className={css.notFoundPageLink} to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;