import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './App.module.css'

import "modern-normalize";
import Loader from './Loader/Loader';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'))
const Navigation = lazy(() => import('./Navigation/Navigation'))
const MovieCast = lazy(() => import('./MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))



const App = () => {


  return (
    <div className={css.headerWrapper} >
      <header className={css.header}>
        <Navigation />
      </header>

      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
              <Route path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Route>

            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />

          </Routes>
        </Suspense>
      </main>
    </div>

  );
};

export default App;
