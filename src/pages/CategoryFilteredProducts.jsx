import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ToyItem from "../components/homelayout/ToyItem";
// import Loading from "./Loading"; // No longer needed for full page

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://b12-a11-pawmart-server.vercel.app/services?category=${categoryName}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  // Internal Skeleton Component (Matches ToyItem layout)
  const SkeletonCard = () => (
    <div className="card bg-base-100 w-full h-96 shadow-sm flex flex-col gap-4 border border-base-200">
      <div className="skeleton h-52 w-full rounded-t-2xl"></div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
             <div className="skeleton h-8 w-1/2"></div>
             <div className="skeleton h-6 w-16 rounded-full"></div>
        </div>
        <div className="skeleton h-4 w-full"></div>
        <div className="flex justify-between mt-2">
            <div className="skeleton h-6 w-20 rounded-full"></div>
            <div className="skeleton h-6 w-20 rounded-full"></div>
        </div>
        <div className="skeleton h-12 w-full mt-2 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">
          {categoryName === "Care Products"
            ? "Pet Care Products"
            : categoryName}
        </h1>
        <div className="divider divider-primary w-24 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
            // Show 6 Skeletons while loading
            Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
        ) : products.length > 0 ? (
          products.map((toy) => (
            <ToyItem key={toy._id} toy={toy} />
          ))
        ) : (
          <div className="card w-full bg-base-200 shadow-xl mt-6 col-span-full">
            <div className="card-body items-center text-center py-16">
              <h3 className="card-title text-2xl text-base-content opacity-50">
                No items found
              </h3>
              <p className="text-base-content/60">
                It looks like this category is empty right now.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilteredProducts;