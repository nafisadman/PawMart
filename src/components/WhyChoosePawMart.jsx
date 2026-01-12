import React from "react";
import { FaHeart, FaShieldAlt, FaPaw } from "react-icons/fa";

const WhyChoosePawMart = () => {
  const features = [
    {
      title: "Trusted Adoption",
      desc: "All pets come from verified shelters and responsible foster homes.",
      icon: <FaShieldAlt className="text-3xl text-primary" />,
    },
    {
      title: "Love First",
      desc: "We prioritize compassion, care, and lifelong happiness for every pet.",
      icon: <FaHeart className="text-3xl text-primary" />,
    },
    {
      title: "Pet-First Community",
      desc: "A growing network of adopters, donors, and animal lovers.",
      icon: <FaPaw className="text-3xl text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content">
            Why Choose PawMart?
          </h2>
          <p className="mt-2 text-base-content/70">
            More than a marketplace — a place where pets come first
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 shadow-md"
            >
              <div className="card-body text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-base-content">
                  {item.title}
                </h3>

                <p className="text-base-content/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePawMart;
