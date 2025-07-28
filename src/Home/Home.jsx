import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/Freebook";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white ">
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
};

export default Home;
