import axios from "axios";

export const requestMovieByQuery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRlZDUyYzFmZDkyMmRhNTMzNTAwM2JlNzQ5ODVkYSIsInN1YiI6IjY1ZmRjZGM4MTk3ZGU0MDE4NjE2ZGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxghtLLYIkMsheL0m2LbzusBBAobQ0mV0V6tJBSYtRs",
    },
  };

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestMovieTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRlZDUyYzFmZDkyMmRhNTMzNTAwM2JlNzQ5ODVkYSIsInN1YiI6IjY1ZmRjZGM4MTk3ZGU0MDE4NjE2ZGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxghtLLYIkMsheL0m2LbzusBBAobQ0mV0V6tJBSYtRs",
    },
  };

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRlZDUyYzFmZDkyMmRhNTMzNTAwM2JlNzQ5ODVkYSIsInN1YiI6IjY1ZmRjZGM4MTk3ZGU0MDE4NjE2ZGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxghtLLYIkMsheL0m2LbzusBBAobQ0mV0V6tJBSYtRs",
    },
  };

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestMovieReview = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRlZDUyYzFmZDkyMmRhNTMzNTAwM2JlNzQ5ODVkYSIsInN1YiI6IjY1ZmRjZGM4MTk3ZGU0MDE4NjE2ZGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxghtLLYIkMsheL0m2LbzusBBAobQ0mV0V6tJBSYtRs",
    },
  };

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRlZDUyYzFmZDkyMmRhNTMzNTAwM2JlNzQ5ODVkYSIsInN1YiI6IjY1ZmRjZGM4MTk3ZGU0MDE4NjE2ZGNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxghtLLYIkMsheL0m2LbzusBBAobQ0mV0V6tJBSYtRs",
    },
  };

  try {
    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    throw error;
  }
};
