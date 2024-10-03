import React from 'react';
import { Tv, Music, Car, Dumbbell, BookOpen, Package } from 'lucide-react';

const SubscriptionCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
      Explore
    </button>
  </div>
);

const AllSubs = () => {
  const subscriptions = [
    { title: "Streaming Services", description: "Access a variety of movies and shows from popular streaming platforms.", icon: Tv },
    { title: "Music Platforms", description: "Stream your favorite music and discover new artists.", icon: Music },
    { title: "Transportation", description: "Convenient transport services at your fingertips.", icon: Car },
    { title: "Fitness Plans", description: "Stay fit with personalized fitness subscription plans.", icon: Dumbbell },
    { title: "Learning Platforms", description: "Learn new skills and access various courses online.", icon: BookOpen },
    { title: "More Subscriptions", description: "Explore various other subscription options tailored for you.", icon: Package },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Subscription Catalog</h1>
        <p className="text-center text-lg text-gray-600 mb-12">Explore a wide range of subscription options available for you.</p>
        
        {/* Subscription Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((sub, index) => (
            <SubscriptionCard key={index} {...sub} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSubs;
