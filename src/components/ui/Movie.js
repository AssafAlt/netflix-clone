import React, { useState } from "react";

import MovieOverlay from "./MovieOverlay";

//find/{movieId}

const Movie = ({ item }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        onClick={openOverlay}
      >
        <img
          className="w-full h-auto block"
          src={
            item?.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`
              : "/default_movie.jpg"
          }
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
        </div>
      </div>

      <MovieOverlay
        isOpen={isOverlayOpen}
        onClose={closeOverlay}
        movieDetails={item}
      />
    </>
  );
};

export default Movie;
