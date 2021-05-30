import React, { useEffect, useState } from "react";
import cognizantImg from "../../img/CognizantImg.jpg";

function AboutCognizant() {
  return (
    <div className="container mt-5 ">
      <div className="container text-center">
        <h2 className="serviceHeadline">Welcome To Our Industry</h2>
      </div>
      <div className="row cognizantBox ">
        <div className="col-6 mt-4 mb-4 text-center" data-aos="flip-left">
          <img src={cognizantImg} style={{ width: "80%" }} />
        </div>
        <div className="col-6 mt-4 mb-4 " >
          <div
            className="p-3  justify-content"
            style={{
              width: "90%",
              backgroundColor: "#ADEFD1FF",
              height: "100%",
              textAlign:"justify",
            }}
          >
            <h4>Cognizant Chemical</h4>

            <br />
            <span>
              We are the Distillator of Various Solvent ourunit situated in
              Taloja MIDC, having our Registered Office in B-120 Disma Office
              Premises, Kalamboli. Also our 2nd unit situated in Patalganga
              MIDC. Where we set up a large Distillation unit in area of 1500
              sq. Mtr.
              <br />
              <br />
              We have Maharashtra Pollution Control Board consent to operate in
              our Taloja Unit for Blending Solvents, paint thinner & Consent to
              Established in Pa-talganga unit, along with BCC.
              <br />
              <br />
              Our sister concern company M/s Chem Oil Industries which is well
              estab-lished company for the past 27 years, with business
              transaction being carried all over India. The company deals with
              various range of solvent and Chemicals. 
              <br />
              <br />
              Once we get an opportunity to work with your organization, we can
              prove our efficiency in our work, so that we can maintain a
              healthy and good business relationship in future. We assure our
              co-operation with you all the times.So please give us a
              opportunity.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutCognizant;
