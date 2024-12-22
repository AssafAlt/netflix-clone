import React from "react";
import { splitText } from "../../utils/textUtils";
import "./styles.css";

const MovieOverlay = ({ isOpen, onClose, movieDetails }) => {
  if (!isOpen) return null;

  const overviewChunks = movieDetails?.overview
    ? splitText(movieDetails.overview, 40)
    : ["No description available for this movie."];

  return (
    <div className=" fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden movie-overlay">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl "
        >
          ✖
        </button>

        <div className="w-full">
          <img
            className="w-full h-64 object-cover"
            src={
              movieDetails?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`
                : "/default_movie.jpg"
            }
            alt={movieDetails?.title}
          />
        </div>

        <div className="p-6 text-center flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-red-600">
            {movieDetails?.title}
          </h2>

          <div className="text-sm text-gray-300 mb-4 overflow-y-auto  max-h-40">
            {overviewChunks.map((chunk, index) => (
              <p key={index} className="leading-4 mb-2 text-center">
                {chunk}
              </p>
            ))}
          </div>

          <div className="text-sm mt-4 space-y-2">
            <p>
              <span className="font-bold text-gray-400">Release Date:</span>{" "}
              {movieDetails?.release_date || "N/A"}
            </p>
            <p>
              <span className="font-bold text-gray-400">Rating:</span>{" "}
              {movieDetails?.vote_average || "N/A"} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOverlay;
