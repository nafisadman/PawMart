import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ToyItem from "./ToyItem";

const ToyStore = () => {
  const data = useLoaderData();
  // console.log(data);
  const [services, setServices] = useState(data);

  const [category, setCategory] = useState("");
  useEffect(() => {
    fetch(`https://b12-a11-pawmart-server.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-primary mb-3">Pets & Suppliers</h1>
      <div className="flex justify-between">
        <form className="flex gap-2">
          <input className="btn" type="checkbox" name="frameworks" aria-label="All" defaultChecked />
          <input className="btn" type="checkbox" name="frameworks" aria-label="Svelte" />
          <input className="btn" type="checkbox" name="frameworks" aria-label="Vue" />
          <input className="btn" type="checkbox" name="frameworks" aria-label="React" />
          <input className="btn btn-square" type="reset" value="×" />
        </form>
        <div className="flex gap-2">
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <button className="btn btn-neutral">Sort</button>
        </div>
      </div>
      <select onChange={(e) => setCategory(e.target.value)} defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick an item</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {services.map((toy) => (
          <ToyItem toy={toy}></ToyItem>
        ))}
      </div>
    </div>
  );
};

export default ToyStore;
