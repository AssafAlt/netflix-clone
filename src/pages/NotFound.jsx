import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-gray-500">404</h1>
        <p className="text-xl text-gray-400">Page Not Found</p>
        <p className="my-4 text-gray-400">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
