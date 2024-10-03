import React from 'react';

const OTTPackages = () => {
  const packages = [
    {
      title: 'Ultimate Streaming Package',
      image: 'https://via.placeholder.com/150',
      description: 'Access to Netflix, Hulu, Disney+, and more!',
      price: '$29.99/month',
      benefits: 'Includes a 1-week free trial and 50 bonus credits!',
    },
    {
      title: 'Family Entertainment Bundle',
      image: 'https://via.placeholder.com/150',
      description: 'Enjoy shows and movies for the entire family with Kids’ safe content.',
      price: '$24.99/month',
      benefits: 'Get exclusive family movie nights and kids’ activities!',
    },
    {
      title: 'Sports & Action Plan',
      image: 'https://via.placeholder.com/150',
      description: 'Live sports and action-packed movies from various platforms.',
      price: '$19.99/month',
      benefits: 'Access to exclusive sports events and highlights!',
    },
    {
      title: 'Horror & Thriller Subscription',
      image: 'https://via.placeholder.com/150',
      description: 'Dive into the world of thrills with our horror collection.',
      price: '$15.99/month',
      benefits: 'Monthly horror movie recommendations and sneak peeks!',
    },
    {
      title: 'Documentary Lovers Plan',
      image: 'https://via.placeholder.com/150',
      description: 'Explore fascinating documentaries from multiple sources.',
      price: '$12.99/month',
      benefits: 'Join exclusive live Q&A sessions with filmmakers!',
    },
    {
      title: 'All-In-One OTT Pass',
      image: 'https://via.placeholder.com/150',
      description: 'One subscription for all your favorite streaming services.',
      price: '$49.99/month',
      benefits: 'Best value! Access all platforms with a single click.',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">OTT Subscription Packages</h1>
      <p className="mb-8 text-center text-gray-700">
        Discover the best OTT packages tailored for every entertainment need!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2 text-center">{pkg.title}</h2>
            <img src={pkg.image} alt={pkg.title} className="mb-2 rounded-lg" />
            <p className="text-gray-600 text-center">{pkg.description}</p>
            <p className="mt-2 text-lg font-bold text-blue-600 text-center">{pkg.price}</p>
            <p className="mt-1 text-sm text-green-600 text-center">{pkg.benefits}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-gray-800">Limited Time Offer!</p>
        <p className="text-gray-600">Get 10% off your first month when you sign up today!</p>
      </div>
    </div>
  );
};

export default OTTPackages;
