import React from 'react';

const TransportSubscriptions = () => {
  const subscriptions = [
    {
      name: 'Uber',
      image: 'https://via.placeholder.com/150',
      description: 'Ride-sharing service that lets you request a ride at your convenience.',
      savings: 'Save up to 20% with our bundled subscriptions!',
    },
    {
      name: 'Lyft',
      image: 'https://via.placeholder.com/150',
      description: 'Affordable rides in minutes. Enjoy rides with friendly drivers.',
      savings: 'Bundle for exclusive discounts on rides!',
    },
    {
      name: 'Zipcar',
      image: 'https://via.placeholder.com/150',
      description: 'Access to cars by the hour or day. Perfect for urban living.',
      savings: 'Get additional driving credits with your subscription.',
    },
    {
      name: 'Bird',
      image: 'https://via.placeholder.com/150',
      description: 'Rent electric scooters for quick, eco-friendly transportation.',
      savings: 'Enjoy free unlocks every month!',
    },
    {
      name: 'Lime',
      image: 'https://via.placeholder.com/150',
      description: 'Scooters and bikes available for short-term rentals.',
      savings: 'Lower rental rates with our exclusive partnership!',
    },
    {
      name: 'Public Transit Pass',
      image: 'https://via.placeholder.com/150',
      description: 'Unlimited rides on buses, trains, and trams for a month.',
      savings: 'Get this pass at a discounted rate with our service!',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Transport Subscription Packages</h1>
      <p className="mb-8 text-center text-gray-700">
        Explore various transport subscription options and save more with our bundled deals!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((subscription, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2 text-center">{subscription.name}</h2>
            <img src={subscription.image} alt={subscription.name} className="mb-2 rounded-lg" />
            <p className="text-gray-600 text-center">{subscription.description}</p>
            <p className="mt-2 text-sm text-green-600 font-semibold text-center">{subscription.savings}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportSubscriptions;
