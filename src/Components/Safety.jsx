import React, { useEffect } from "react";
import "./about.css";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import bannerImg from "../img/Chemicals_banner.jpg";
import designSafety from "../img/designSafety.jpg";
import CheckIcon from "@material-ui/icons/Check";
import processSafety from "../img/processSafety.jpg";
import electricalSafety from "../img/electricalSafety.jpg";

function Legal() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <img src={bannerImg} alt="about" className="d-block w-100" />
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: "3%"}}
      >
        <div className="container text-center">
          <h2 className="serviceHeadline">Safety Features</h2>
        </div>
        <div
          className="container"
          style={{ marginTop: "1%", paddingRight: "15%", paddingLeft: "15%" }}
        >
          <div className="row">
            <div className="col-md-2 text-center checkIcon">
              <CheckIcon />
            </div>
            <div className="col-md-10">
              <span>
                Every reactor is equipped with a Fainger Laser – the safety
                relief valve. Also, we have installed a BS & B make rupture disk
                on each reactors. Utilities, such as cooling tower, water jet
                ejectors on a separate structure providing clear and open space
                for material movement, are installed{" "}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center checkIcon ">
              <CheckIcon />
            </div>
            <div className="col-md-10">
              <span>
                Flame proof electric fittings. A centralised electronic panel
                controls all equipment from single place. Whole plant has been
                provided with proper earthing, deep pipe have been installed in
                reactors and receivers and drums filling is also done with
                proper earthing
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center checkIcon">
              <CheckIcon />
            </div>
            <div className="col-md-10">
              <span>
                All the flanges are provided with copper jumpers for
                uninterrupted continuity for discharge of static charge
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center checkIcon ">
              <CheckIcon />
            </div>
            <div className="col-md-10">
              <span>
                {" "}
                Auto temperature controllers are provided for all the reactors.
                Vacuum braking is done with nitrogen{" "}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 text-center checkIcon">
              <CheckIcon />
            </div>
            <div className="col-md-10">
              <span>
                {" "}
                All reactors have separate external cooling coil for instant
                cooling{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 ">
            <h2 className="abtComTitle">Design Safety</h2>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Fully ventilated plant</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>1.5 and 1.2 Mtr parallel staircases upto the top</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  The plant is supported by 25 feet deep foundation resulting in
                  very stable structure
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  The plant has two gates and there are no obstacles for
                  vehicles to enter from Gate NO1 and to exit from Gate No 2
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  The plant is designed as per the norms of fire department of
                  M.I.D.C and D.I.S.H
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <img
              class="abtComImg "
              src={designSafety}
              alt=""
              style={{ width: "30%", borderRadius:12 }}
            />
          </div>
        </div>
      </div>
      {/* $$$$$$$$$ */}
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 text-center">
            <img
              class="abtComImg "
              src={processSafety}
              alt=""
              style={{ width: "47%", marginTop: "7%" , borderRadius:12}}
            />
          </div>
          <div className="col-6 ">
            <h2 className="abtComTitle">Process Safety</h2>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  All the vessel are equipped given pressure relief valves and
                  rupture, discs
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  All the vessels, receivers , tanks are provided with dip pipes
                  to prevent Generation of Static charge.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Auto temperature controllers are provided on each distillation
                  system stopping inflow of thermic oil into system on achieving
                  set temperature preventing unwanted rise in temperature.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Other safety measures such as Copper Jumpers for Flanges,
                  Flame Arrestors on vents & Nitrogen Anitisation are also
                  taken.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 ">
            <h2 className="abtComTitle">Electrical Safety</h2>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>All electrical equipments are flameproof</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Separate earth pits for plant , electrical panel , DG set ,
                  tanks , tankers loading , unloading and drum filling
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>All the cable goes through cable trays</span>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <img
              class="abtComImg "
              src={electricalSafety}
              alt=""
              style={{ width: "47%", marginTop: "7%", borderRadius:12 }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 text-center">
            <img
              class="abtComImg "
              src={processSafety}
              alt=""
              style={{ width: "47%", marginTop: "18%" , borderRadius:12}}
            />
          </div>
          <div className="col-6 ">
            <h2 className="abtComTitle">Environment Safety</h2>
            <div className="">
              Considering our responsibility towards environmental harmony, we
              make our best effort to protect it. We have taken following steps:
            </div>
            <div className="row mt-2">
              <div className="col-md-2 text-center checkIcon ">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  We have valid consent from M.P.C.B. to carry out distillation
                  activities. We are also a member of C.E.T.P (Common Effluent
                  Treatment Plant) and T.T.C.W.M.A (Trans Thane Creek Waste
                  Management Association)
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Effluent is treated in our E.T.P. plant and neutral effluent
                  is then sent to C.E.T.P.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Sludge and solid waste is sent to Mumbai Waste Management.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Transportation of hazardous wastes is done through M.P.C.B.
                  authorised transport only (M/S Vaishnavi transport)
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>
                  Additives are added in the furnace oil to maximise the energy
                  efficiency and to minimise the carbon emission in the air from
                  the thermic fluid heater
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 ">
            <h2 className="abtComTitle">Fire Safety </h2>
            <div className="row ml-1">
              <span>
                Periodical training is provided for using FireX and to act
                quickly in any emergency situation to all our employees. In case
                of mishap the fire brigade is located at 2 km distance for quick
                response.<br/><br/> M.S.D.S. (Material Safety Data Sheet) of all products
                in the premises is available with the laboratory department and
                security cabin.
              </span>
            </div>
          </div>
          <div className="col-6 text-center">
            <img
              class="abtComImg "
              src={electricalSafety}
              alt=""
              style={{ width: "47%", marginTop: "7%", borderRadius:12 }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Legal;
