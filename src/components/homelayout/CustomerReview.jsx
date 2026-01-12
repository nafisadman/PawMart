import React from "react";

const CustomerReview = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content">
            Meet Our Pet Heroes
          </h2>
          <p className="text-base-content/70">
            Real stories from our community members
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              role: "Rescued 3 Cats",
              img: "https://i.pravatar.cc/150?img=32",
              quote:
                "PawMart made it so easy to connect with shelters. My home is full of joy now!",
            },
            {
              name: "Ahmed Khan",
              role: "Adopted 'Rocky'",
              img: "https://i.pravatar.cc/150?img=11",
              quote:
                "Finding a companion was a journey. I'm glad I chose to adopt rather than shop.",
            },
            {
              name: "Emily Davis",
              role: "Regular Donor",
              img: "https://i.pravatar.cc/150?img=5",
              quote:
                "I love buying supplies here because I know it supports a community of animal lovers.",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md border border-base-300"
            >
              <div className="card-body text-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-base-200 shadow"
                />

                <h4 className="font-bold text-lg text-base-content">
                  {person.name}
                </h4>

                <p className="text-sm text-base-content/70 mb-2">
                  {person.role}
                </p>

                <p className="italic text-base-content/80">
                  “{person.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
