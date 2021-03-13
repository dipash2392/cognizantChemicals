import React, { useEffect } from "react";
import legal from "../img/legal.jpg";
import "./about.css";
import "../App.css";
import $ from "jquery";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CheckIcon from "@material-ui/icons/Check";
function Legal() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <img src={legal} alt="about" className="d-block w-100" />
      </div>
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <h2 className="serviceHeadline">Legal Compliance</h2>
        <h5>This is subtitle.</h5>
      </div>
      <div className="container" style={{ marginTop: "5%", paddingRight:"15%", paddingLeft:"15%" }}>
        <div className="row">
          <div className="col-md-2 text-center checkIcon">
            <CheckIcon />
          </div>
          <div className="col-md-10">
            <span>Valid MPCB consent & Rule No-9 CPCB License</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 text-center checkIcon">
            <CheckIcon />
          </div>
          <div className="col-md-10">
            <span>Valid FIRE NOC from MIDC</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 text-center checkIcon">
            <CheckIcon />
          </div>
          <div className="col-md-10">
            <span>Valid factory license from D.I.S.H.</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 text-center checkIcon">
            <CheckIcon />
          </div>
          <div className="col-md-10">
            <span>Member of Mumbai Waste management Limited</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Legal;
