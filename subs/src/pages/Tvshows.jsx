import React from 'react';

const TVShows = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">TV Shows</h1>
      <p className="mb-8 text-center text-gray-700">
        Discover popular TV shows and find your next binge-watch!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 1</h2>
          <img src="https://via.placeholder.com/150" alt="Show 1" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 1. This show is about...
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 2</h2>
          <img src="https://via.placeholder.com/150" alt="Show 2" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 2. This show is about...
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 3</h2>
          <img src="https://via.placeholder.com/150" alt="Show 3" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 3. This show is about...
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 4</h2>
          <img src="https://via.placeholder.com/150" alt="Show 4" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 4. This show is about...
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 5</h2>
          <img src="https://via.placeholder.com/150" alt="Show 5" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 5. This show is about...
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Show Title 6</h2>
          <img src="https://via.placeholder.com/150" alt="Show 6" className="mb-2 rounded" />
          <p className="text-gray-600">
            Brief description of Show Title 6. This show is about...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
