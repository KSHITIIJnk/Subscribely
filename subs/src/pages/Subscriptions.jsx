import React from 'react';
import { Link } from 'react-router-dom';

const Subscriptions = () => {
  const subscriptions = [
    {
      name: 'Netflix',
      description: 'Watch your favorite movies and TV shows.',
      price: '$15.99/month',
    },
    {
      name: 'Spotify',
      description: 'Stream millions of songs and podcasts.',
      price: '$9.99/month',
    },
    {
      name: 'Amazon Prime',
      description: 'Enjoy fast shipping and exclusive deals.',
      price: '$12.99/month',
    },
    {
      name: 'Disney+',
      description: 'Watch the latest Disney movies and shows.',
      price: '$7.99/month',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Manage Your Subscriptions</h1>
        <p className="text-center text-gray-600 mb-8">
          Here you can view and manage your active subscriptions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((subscription, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">{subscription.name}</h2>
              <p className="text-gray-600 mb-4">{subscription.description}</p>
              <p className="text-lg font-bold text-blue-600">{subscription.price}</p>
              <div className="mt-4">
                <Link
                  to={`/subscriptions/edit/${index}`} // Placeholder route for editing
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Edit Subscription
                </Link>
              </div>
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

export default Subscriptions;
