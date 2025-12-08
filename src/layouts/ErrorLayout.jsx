import React, { useEffect } from "react";

const ErrorLayout = () => {
  useEffect(() => {
    document.title = "";
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
        <div className="hero-content text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <div className="max-w-xl">
            <h1 className="text-9xl font-extrabold text-primary mb-4">
              404
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Page Not Found
            </h2>
            <p className="py-6 text-lg text-gray-600 dark:text-gray-300">
              Oops! The page you are looking for might have been removed, had
              its name changed, or is temporarily unavailable.
            </p>
            <a
              href="/"
              className="btn btn-primary mt-4 text-white bg-blue-600 hover:bg-blue-700 border-none transition duration-300"
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
