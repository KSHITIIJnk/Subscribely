import React from 'react';
import { Link } from 'react-router-dom'; 

const Rewards = () => {
  const rewards = [
    {
      title: 'Amazon Gift Card',
      description: 'Redeem for purchases on Amazon.',
      value: '$10',
    },
    {
      title: 'Google Play Gift Card',
      description: 'Use for apps, games, and more on Google Play.',
      value: '$10',
    },
    {
      title: 'Starbucks Gift Card',
      description: 'Enjoy your favorite coffee at Starbucks.',
      value: '$5',
    },
    {
      title: 'iTunes Gift Card',
      description: 'Use for music, movies, and more from iTunes.',
      value: '$10',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Rewards</h1>
        <p className="text-center text-gray-600 mb-8">
          Here are the available rewards you can redeem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">{reward.title}</h2>
              <p className="text-gray-600 mb-4">{reward.description}</p>
              <p className="text-lg font-bold text-blue-600">{reward.value}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                Redeem Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
