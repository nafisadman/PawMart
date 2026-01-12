import React from "react";
import { Link } from "react-router";
import { FaDog, FaBone, FaShoppingBag, FaMedkit } from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Pets",
      label: "Pets",
      icon: <FaDog className="text-4xl text-primary" />,
      bg: "bg-primary/10",
    },
    {
      id: 2,
      name: "Food",
      label: "Pet Food",
      icon: <FaBone className="text-4xl text-primary" />,
      bg: "bg-success/10",
    },
    {
      id: 3,
      name: "Accessories",
      label: "Accessories",
      icon: <FaShoppingBag className="text-4xl text-primary" />,
      bg: "bg-info/10",
    },
    {
      id: 4,
      name: "Care Products",
      label: "Pet Care Products",
      icon: <FaMedkit className="text-4xl text-primary" />,
      bg: "bg-error/10",
    },
  ];

  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-base-content">
          Browse by Category
        </h2>
        <p className="mt-2 text-base-content/70">
          Find exactly what your furry friend needs
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            to={`/category-filtered-product/${category.name}`}
            key={category.id}
            className={`card border border-base-300 hover:shadow-xl transition-all duration-300 ${category.bg}`}
          >
            <div className="card-body items-center text-center">
              <div className="p-4 rounded-full bg-base-100 shadow-sm mb-2">
                {category.icon}
              </div>

              <h3 className="card-title text-xl text-base-content">
                {category.label}
              </h3>

              <p className="text-sm text-base-content/70">
                Explore {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;