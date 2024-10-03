import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ArrowRight, Tv, Music, Car, Dumbbell, BookOpen, Package } from 'lucide-react';

const SubscriptionCard = ({ title, description, icon: Icon, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
      Learn More <ArrowRight className="ml-1 w-4 h-4" />
    </Link>
  </div>
);

const Home = () => {
  const subscriptions = [
    { title: "Streaming Services", description: "Enjoy a variety of movies and TV shows from popular streaming platforms.", icon: Tv, link: "/tvshows" },
    { title: "Music Platforms", description: "Stream your favorite music and discover new artists.", icon: Music, link: "/music" },
    { title: "Transportation", description: "Convenient transportation options at your fingertips.", icon: Car, link: "/transport" },
    { title: "Fitness Plans", description: "Stay healthy and fit with personalized fitness subscriptions.", icon: Dumbbell, link: "/fitness" },
    { title: "Learning Platforms", description: "Access courses and learn new skills from home.", icon: BookOpen, link: "/learning" },
    { title: "More Subscriptions", description: "Explore various other subscription options tailored for you.", icon: Package, link: "/tvshows" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Subscribely</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover and manage the best subscriptions for your digital lifestyle, all in one place.
          </p>
          <Link 
            to="/tvshows" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subscriptions.map((sub, index) => (
            <SubscriptionCard key={index} {...sub} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your digital life?</h2>
          <p className="text-xl mb-6">Join Subscribely today and take control of all your subscriptions.</p>
          <Link 
            to="/allsubs" 
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
          >
            Explore All Subscriptions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
