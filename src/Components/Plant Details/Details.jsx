import React, { useEffect, useState } from "react";
import abtUs from "../../img/carousel.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PlantDetails from "./PlantDetails";
import "./plantDetails.css";
import LabDetails from "./LabDetails";

function Details() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <img src={abtUs} alt="about" className="d-block w-100" />
        <div className="container"></div>
      </div>

      {/* Plant Details */}
      <div className="container mb-5">
        <PlantDetails />
      </div>
      <div className="parallax">
        {/* <img src={abtUs} alt="about" className=" " /> */}
      </div>
      {/* Plant Details */}
      <div className="container">
        <LabDetails />
      </div>
      <Footer />
    </div>
  );
}
export default Details;
