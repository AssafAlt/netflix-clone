import React, { useEffect, useState } from "react";
import Row from "../components/ui/Row";
import { fetchMoviesApi } from "../api/moviesApi";
import Main from "../components/ui/Main";

const Home = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [anime, setAnime] = useState([]);
  const [mainMovie, setMainMovie] = useState({});

  const onGetMainMovieHandler = async () => {
    const data = await fetchMoviesApi("/movie/popular", { page: 2 }); // Await the API response
    if (data && data.length > 0) {
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      setMainMovie(randomMovie);
    }
    return;
  };

  const onGetMoviesHandler = async (fetchFun, setState) => {
    const data = await fetchFun();
    setState(data);
  };

  const getMovies = async () => {
    try {
      await onGetMainMovieHandler();
      await onGetMoviesHandler(
        () => fetchMoviesApi("/movie/upcoming", { page: 1 }),
        setUpcoming
      );
      await onGetMoviesHandler(
        () => fetchMoviesApi("/movie/popular", { page: 2 }),
        setPopular
      );
      await onGetMoviesHandler(
        () =>
          fetchMoviesApi("/search/movie", {
            query: "anime",
            page: 1,
            include_adult: false,
          }),
        setAnime
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      getMovies();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      <Main movie={mainMovie} />
      <Row title="Up Coming" movies={upcoming} />
      <Row title="Popular" movies={popular} />
      <Row title="Anime" movies={anime} />
    </div>
  );
};

export default Home;
