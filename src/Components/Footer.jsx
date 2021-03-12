import React, { useEffect } from "react";
import footerBG from "../img/footerBG.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

function App() {
  return (
    <div className="App">
     
     <div
        className="container-fluid mt-5"
        style={{
          backgroundImage: `url('${footerBG}') `,
          backgroundRepeat: "no-repeat",
          marginTop: "20px",
        }}
      >
        <div>
          <div class="container py-5">
            <div className="row">
              <div className="col-4">
                <div class="row">
                  <a
                    href="#"
                    class="navbar-brand text-uppercase font-weight-bold"
                    style={{ color: "#fff" }}
                  >
                    Cognizant Chemicals
                  </a>
                </div>
                <div
                  className="row getInTouchDetails mt-4"
                  style={{ fontSize: "13px" }}
                >
                  <ul>
                    <li>
                      <span>Home</span>
                    </li>
                    <li>
                      <span>About Us</span>
                    </li>
                    <li>
                      <span>QC & RD</span>
                    </li>
                    <li>
                      <span>Safety</span>
                    </li>
                    <li>
                      <span>Legal Compliance</span>
                    </li>
                    <li>
                      <span>Our Clients</span>
                    </li>
                    <li>
                      <span>Contact</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4">
                <div className="row">
                  <h2 className="getInTouch mt-2">Get In Touch</h2>
                </div>
                <div
                  className="row getInTouchDetails mt-4"
                  style={{ fontSize: "13px" }}
                >
                  <ul>
                    <li>
                      <span>
                        PHONE: +91 22 27621236
                        <br />
                        +91 22 27684477
                      </span>
                    </li>
                    <li>
                      <span>EMAIL: info@darshanchemicals.in</span>
                    </li>
                    <li>
                      <span>
                        ADDRESS: Darshan chemicals A-39 TTC industrial area
                        pawane village Navi mumbai 400706 Maharastra India
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4  ">
                <div className="row ml-5">
                  <h2 className="getInTouch mt-2">Connect Us on</h2>
                </div>
                <div className="row mt-4 ml-5">
                  <FacebookIcon
                    className="footerIcons ml-2"
                    style={{ fontSize: "30px" }}
                  />
                  <TwitterIcon
                    className="footerIcons ml-2"
                    style={{ fontSize: "30px" }}
                  />
                  <YouTubeIcon
                    className="footerIcons ml-2"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ borderTop: "1px solid gray" }} />
            <div className="container text-center">
              <p className="copyrightText">© 2014 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
