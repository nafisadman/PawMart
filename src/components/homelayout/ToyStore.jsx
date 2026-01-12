import React, { useEffect, useState } from "react";
import ToyItem from "./ToyItem";
import axios from "axios";

const ToyStore = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // asc | desc

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();

    if (category && category !== "All") {
      params.append("category", category);
    }

    if (search) {
      params.append("search", search);
    }

    const url = `https://b12-a11-pawmart-server.vercel.app/services?${params.toString()}`;

    const timeoutId = setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setServices(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [category, search]);

  // 🔑 SORT LOGIC
  const sortedServices = [...services].sort((a, b) => {
    if (sortOrder === "asc") {
      return Number(a.price) - Number(b.price);
    }
    if (sortOrder === "desc") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });

  const SkeletonCard = () => (
    <div className="card bg-base-100 max-w-96 h-96 shadow-sm m-5 flex flex-col gap-4 border border-base-200">
      <div className="skeleton h-52 w-full rounded-t-2xl"></div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="skeleton h-8 w-1/2"></div>
          <div className="skeleton h-6 w-16 rounded-full"></div>
        </div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-3/4"></div>
        <div className="flex justify-between mt-2">
          <div className="skeleton h-6 w-20 rounded-full"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
        </div>
        <div className="skeleton h-12 w-full mt-2 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-3">
        Pets & Suppliers
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered mt-4 w-full max-w-xs"
        >
          <option value="All">All</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>

        <div className="flex gap-2">
          {/* SEARCH */}
          <label className="input flex items-center gap-2 border rounded-lg px-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
              className="grow"
            />
          </label>

          {/* SORT */}
          <button
            className="btn btn-neutral"
            onClick={() =>
              setSortOrder((prev) =>
                prev === "asc" ? "desc" : "asc"
              )
            }
          >
            Sort{" "}
            {sortOrder === "asc"
              ? "↑"
              : sortOrder === "desc"
              ? "↓"
              : ""}
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : sortedServices.map((toy) => (
              <ToyItem key={toy._id} toy={toy} />
            ))}
      </div>
    </div>
  );
};

export default ToyStore;
