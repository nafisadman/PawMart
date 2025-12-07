import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ToyItem from "../components/homelayout/ToyItem";

const RecentListings = () => {
  const data = useLoaderData();
  console.log(data);
  const [services, setServices] = useState(data);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-primary mb-3">Recent Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services?.map((toy) => (
          <ToyItem toy={toy}></ToyItem>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
