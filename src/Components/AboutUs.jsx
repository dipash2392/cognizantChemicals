import React, { useEffect } from "react";
import abtUs from "../img/carousel.jpg";
import serviceImg1 from "../img/icon51.jpg";
import "./about.css";
import "../App.css";
import $ from "jquery";
import founder from "../img/founder.png";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import PeopleIcon from "@material-ui/icons/People";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Footer from "./Footer";
import Navbar from "./Navbar"
function Home() {
  useEffect(() => {
    $(document).ready(function () {
      setInterval(counterFunction(), 1000);
    });
  }, []);
  const counterFunction = () => {
    $(window).on("load resize", function () {
      $(".counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 8000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    });
  };
  return (
    <div className="">
      <Navbar/>
      <div className="">
        <img src={abtUs} alt="about" className="d-block w-100" />
        {/* <div className="container" style={{ marginTop: "-13%" }}>
          <h2
            className="aboutbannertext"
            style={{ borderBottom: "3px solid red" }}
          >
            About Us
          </h2>
          <h5>we provide</h5>
        </div> */}
      </div>
      {/* section one */}
      <div className="container" style={{ marginTop: "8%" }}>
        <div className="row ">
          <div className="col-6 ">
            <h2 className="abtComTitle">Our Managing Director</h2>
            <span>
              <br />I do not know how history will judge me, but let me say that
              I've spent a lot of time & energy trying to transform Cognizant
              Group from a patriarchal concern to an institutional enterprise.
              It would therefore be a mark of failure on my part if it were
              perceived that S. Venkatesan Mudlair epitomises the groups
              success.
              <br />
              <br /> What I have done is establish growth mechanisms, play down
              individuals & play up the team that has made the companies what
              they are. I, for one, am not the kind who loves dwelling on the
              'I', if history remembers me at all, I hope it will be for this
              transformation.
            </span>
            <div className="text-right mt-3">

            <span className="" style={{color:"#ffd200",fontSize:30,}}>- </span><span className="bold">S. Venkatesan Mudliar</span>
            </div>
          </div>
          <div className="col-6 text-center ">
            <img
              class="abtComImg mt-5 "
              src={founder}
              alt=""
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
      {/* Services */}

      <div
        className="container-fluid"
        style={{ marginTop: "5%", backgroundColor: "#ffd200", padding: "5%" }}
      >
        <div className="row ">
          <div className="col-6 serviceDetails">
            <div className="row">
              <div className="col-4 text-center">
                <div className="vm-iconbox" style={{ borderRadius: "50%" }}>
                  <VisibilityIcon className="vm-icon" />
                </div>
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">Vision</h5>
                <span>
                  Building business values by creating the best performance
                  chemical products for our customers & society through open
                  innovation.
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-4 text-center">
                <div className="vm-iconbox" style={{ borderRadius: "50%" }}>
                  <TrackChangesIcon className="vm-icon" />
                </div>
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">Mission</h5>
                <span>
                  To delight our customers by consistently manufacturing high
                  quality products through innovation, research & development by
                  maintaining global best practices in quality standards &
                  safety.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sevices end */}
      {/* clients */}
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <h2 className="serviceHeadline">Some Intresting Facts</h2>
      </div>
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="icon-box">
              <BusinessCenterIcon className="icon" />
            </div>
            <span className="counter">150</span>
            <br />
            <span className="counterText">Projects Completed</span>
          </div>
          <div className="col-md-3">
            <div className="icon-box">
              <PeopleIcon className="icon" />
            </div>
            <span className="counter">100</span>
            <br />
            <span className="counterText">Users Connected</span>
          </div>
          <div className="col-md-3">
            <div className="icon-box">
              <EmojiEventsIcon className="icon" />
            </div>
            <span className="counter">50</span>
            <br />
            <span className="counterText">Global Achievements</span>
          </div>
          <div className="col-md-3">
            <div className="icon-box">
              <BusinessCenterIcon className="icon" />
            </div>
            <span className="counter">180</span>
            <br />
            <span className="counterText">Projects Completed</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
