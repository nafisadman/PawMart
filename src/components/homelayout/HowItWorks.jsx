import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-primary" />,
      title: "Browse",
      description: "Explore our collection of pets and supplies",
    },
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Choose",
      description: "Find your perfect match or favorite product",
    },
    {
      icon: <FaShoppingCart className="text-4xl text-primary" />,
      title: "Purchase",
      description: "Add to cart and complete checkout securely",
    },
    {
      icon: <FaHome className="text-4xl text-primary" />,
      title: "Enjoy",
      description: "Welcome your new companion or product home",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 my-20">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                {step.icon}
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;