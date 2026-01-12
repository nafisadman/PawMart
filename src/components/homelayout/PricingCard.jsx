import React from "react";

const PricingCard = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "৳799",
      period: "mo",
      badge: false,
      features: [
        { name: "Up to 5 pet listings", included: true },
        { name: "Basic pet care tips", included: true },
        { name: "Community access", included: true },
        { name: "Email support", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      name: "Premium",
      price: "৳2,499",
      period: "mo",
      badge: true,
      features: [
        { name: "Unlimited pet listings", included: true },
        { name: "Pet care consultation", included: true },
        { name: "Community access", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: "৳8,499",
      period: "mo",
      badge: false,
      features: [
        { name: "Unlimited pet listings", included: true },
        { name: "Pet care consultation", included: true },
        { name: "Community access", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Special Package</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Choose the perfect plan for your pet care needs
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-md hover:shadow-lg transition-shadow h-full ${
                plan.badge ? "md:scale-105 md:shadow-lg" : ""
              }`}
            >
              <div className="card-body flex flex-col">
                {/* Badge */}
                {plan.badge && (
                  <span className="badge badge-warning badge-sm self-start mb-2">
                    Most Popular
                  </span>
                )}

                {/* Plan Name and Price */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-base-content/70">/{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-5 mt-0.5 flex-shrink-0 ${
                          feature.included
                            ? "text-success"
                            : "text-base-content/30"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-base-content"
                            : "text-base-content/50 line-through"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`btn btn-block ${
                    plan.badge ? "btn-primary" : "btn-outline btn-primary"
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-base-content/70 text-sm">
            All plans include access to our pet community and basic resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;