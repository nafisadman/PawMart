import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToyDetailsCard from "../components/ToyDetailsCard";
import Loading from "./Loading";
import useTitle from "../hooks/useTitle";

const ToyDetails = () => {
  useTitle("Details");
  const { id } = useParams();
  console.log("manual tracing: toy details page", id); // successfully prints the id 692...

  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetch(`https://b12-a11-pawmart-server.vercel.app/services/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("manual tracing: data", data);
        setPetDetails(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="pt-20">
      <header>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 gap-5">
        <h2 className="text-3xl text-primary font-bold mb-5">Details</h2>
        {petDetails ? <ToyDetailsCard toyDetails={petDetails}></ToyDetailsCard> : <Loading></Loading>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ToyDetails;
