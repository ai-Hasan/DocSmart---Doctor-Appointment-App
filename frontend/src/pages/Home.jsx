import React from "react";
import Hero from "../components/Hero";
import Speciality from "../components/Speciality";
import PopularDoctors from "../components/PopularDoctors";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Speciality />
      <PopularDoctors />
      <Banner />
    </div>
  );
};

export default Home;
