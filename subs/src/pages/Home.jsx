import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Welcome to Subscribely</h1>
      <p className="mb-8 text-center text-gray-700">
        Discover the best subscriptions for movies, TV shows, music, transport, and more!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Streaming Services</h2>
          <img src="https://via.placeholder.com/150" alt="Streaming" className="mb-2 rounded" />
          <p className="text-gray-600">
            Enjoy a variety of movies and TV shows from popular streaming platforms.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Music Platforms</h2>
          <img src="https://via.placeholder.com/150" alt="Music" className="mb-2 rounded" />
          <p className="text-gray-600">
            Stream your favorite music and discover new artists.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Transportation Subscriptions</h2>
          <img src="https://via.placeholder.com/150" alt="Transport" className="mb-2 rounded" />
          <p className="text-gray-600">
            Convenient transportation options at your fingertips.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Fitness Plans</h2>
          <img src="https://via.placeholder.com/150" alt="Fitness" className="mb-2 rounded" />
          <p className="text-gray-600">
            Stay healthy and fit with personalized fitness subscriptions.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">Learning Platforms</h2>
          <img src="https://via.placeholder.com/150" alt="Learning" className="mb-2 rounded" />
          <p className="text-gray-600">
            Access courses and learn new skills from home.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">More Subscriptions</h2>
          <img src="https://via.placeholder.com/150" alt="More" className="mb-2 rounded" />
          <p className="text-gray-600">
            Explore various other subscription options tailored for you.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#subscribe" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Explore All Subscriptions
        </a>
      </div>
    </div>
  );
};

export default Home;
