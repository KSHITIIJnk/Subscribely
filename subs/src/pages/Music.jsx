import React from 'react';

const MusicSubscriptions = () => {
  const subscriptions = [
    {
      name: 'Spotify',
      image: 'https://via.placeholder.com/150',
      description: 'Stream millions of songs and podcasts. Discover new music every day!',
      price: '$9.99/month',
      benefits: 'Get 10 extra credits for personalized playlists!',
    },
    {
      name: 'Apple Music',
      image: 'https://via.placeholder.com/150',
      description: 'Access to over 75 million songs, curated playlists, and more.',
      price: '$10.99/month',
      benefits: 'Exclusive early access to new albums and releases!',
    },
    {
      name: 'Amazon Music',
      image: 'https://via.placeholder.com/150',
      description: 'Enjoy music streaming with millions of songs included with Prime.',
      price: '$8.99/month',
      benefits: 'Receive 5 credits for discounts on music merchandise!',
    },
    {
      name: 'YouTube Music',
      image: 'https://via.placeholder.com/150',
      description: 'Stream your favorite music videos and songs with personalized playlists.',
      price: '$11.99/month',
      benefits: 'Enjoy ad-free experience plus exclusive video content!',
    },
    {
      name: 'Tidal',
      image: 'https://via.placeholder.com/150',
      description: 'Listen to high-fidelity music and exclusive content from top artists.',
      price: '$19.99/month',
      benefits: 'Get 15 extra credits for exclusive artist content!',
    },
    {
      name: 'Pandora',
      image: 'https://via.placeholder.com/150',
      description: 'Create personalized radio stations based on your favorite songs and artists.',
      price: '$4.99/month',
      benefits: 'Free month with every referral you make!',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Music Subscription Packages</h1>
      <p className="mb-8 text-center text-gray-700">
        Discover the best music subscriptions tailored for your listening pleasure!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((subscription, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2 text-center">{subscription.name}</h2>
            <img src={subscription.image} alt={subscription.name} className="mb-2 rounded-lg" />
            <p className="text-gray-600 text-center">{subscription.description}</p>
            <p className="mt-2 text-lg font-bold text-blue-600 text-center">{subscription.price}</p>
            <p className="mt-1 text-sm text-green-600 text-center">{subscription.benefits}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSubscriptions;
