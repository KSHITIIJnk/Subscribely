import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
    <div className="bg-blue-100 p-3 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    { name: "Kshitij", role: "CEO & Founder", image: "/api/placeholder/150" },
    { name: "Rishi", role: "CTO", image: "/api/placeholder/150" },
  ];

  const values = [
    { icon: Users, title: "Customer-Centric", description: "We prioritize our customers in every aspect of our service." },
    { icon: Target, title: "Innovation", description: "We continually seek to enhance and innovate our offerings." },
    { icon: Award, title: "Quality", description: "We are dedicated to delivering superior subscription services." },
    { icon: Zap, title: "Simplicity", description: "We ensure that managing subscriptions is straightforward and efficient." },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">About Subscribely</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our mission is to simplify your digital life by providing the premier subscription management platform.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4 max-w-3xl mx-auto text-center">
            Founded in 2020, Subscribely was established to streamline the management of multiple subscriptions. Recognizing the rise of subscription-based services, we created a centralized platform to manage them all effortlessly.
          </p>
          <p className="text-gray-600 mb-4 max-w-3xl mx-auto text-center">
            Today, we proudly serve thousands of users, empowering them to discover, manage, and optimize their subscriptions across various categories, including entertainment, productivity, and wellness.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
