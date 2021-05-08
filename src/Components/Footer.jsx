import React, { useEffect } from "react";
import footerBG from "../img/footerBG.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./hover.css"
function App() {
  return (
    <div className="App">
     
     <div
        className="container-fluid mt-5"
        style={{
          backgroundColor:"#000",
          // backgroundImage: `url('${footerBG}') `,
          // backgroundRepeat: "no-repeat",
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
                    style={{ color: "#ffd200" }}
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
                      <span className="font-weight-bold hvr-grow" style={{color:"#ffd200"}}>
                        PHONE :</span><br/><span> +91 27425500
                      </span>
                    </li>
                    <li>
                    <span className="font-weight-bold hvr-grow" style={{color:"#ffd200"}}>
                        EMAIL :</span><br/><span> cognizantpvtltd@rediffmail.com <br/>cognizantchemicalpvtltd@gmail.com</span>
                    </li>
                    <li> <span className="font-weight-bold hvr-grow" style={{color:"#ffd200"}}>
                    ADDRESS :</span><br/>
                      <span> <span className="font-weight-bold">
                      Registered office :
 </span> Darshan chemicals A-39 TTC industrial area
                        pawane village Navi mumbai 400706 Maharastra India
                      </span>
                      <span> <span className="font-weight-bold">
                      Unit I :
 </span> W216A, MIDC Taloja,
Raigad Dist. – 410208
                      </span><br/>
                      <span> <span className="font-weight-bold">
                      Unit II :
 </span> E 106 ADDL. Patalganga MIDC,
Chavne Village,
Panvel – 410220.ia
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
              <p className="copyrightText">© Cognizant Chemical Pvt Ltd - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
