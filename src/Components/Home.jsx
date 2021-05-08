import React, { useEffect } from "react";
import bannerImg from "../img/Chemicals_banner.jpg";
import abtUs from "../img/cognizant.jpg";
import serviceImg1 from "../img/icon51.jpg";
import "./home.css";
import techNova from "../img/techNova.jpg";
import arch from "../img/arch.jpg";
import tagros from "../img/tagros.jpg";
import polygel from "../img/polygel.jpg";
import proVentus from "../img/proVentus.png";
import malladi from "../img/malladi.jpg";
import orchid from "../img/orchid.jpg";
import kothari from "../img/kothari.jpg";
import reliance from "../img/reliance.png";
import srichementor from "../img/srichementor.png";
import strides from "../img/strides.jpg";
import moleculeBG from "../img/chemistry_banner.jpg";
import banner from "../img/images.jpg";
import banner1 from "../img/chemical-science.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

// import Breadcrumb from "./Breadcrum"
function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={bannerImg}
              alt="First slide"
              style={{ minHeight: "500px", backgroundAttachment: "fixed" }}
            />
            <div class="carousel-caption">
              {/* <h6 className="bannerSpanText">NATURE BEAUTY</h6>
              <h2 className="bannerh2text">
                Overcoming technology challenges: making the most of resorces
              </h2> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={banner1}
              alt="Second slide"
              style={{ minHeight: "500px", backgroundAttachment: "fixed" }}
            />
            <div class="carousel-caption">
              {/* <h6 className="bannerSpanText">NATURE BEAUTY</h6>
              <h2 className="bannerh2text">
                Overcoming technology challenges: making the most of resorces
              </h2> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={moleculeBG}
              alt="Third slide"
              style={{ minHeight: "480px", backgroundAttachment: "fixed" }}
            />
            <div class="carousel-caption">
              {/* <h6 className="bannerSpanText">NATURE BEAUTY</h6>
              <h2 className="bannerh2text">
                Overcoming technology challenges: making the most of resorces
              </h2> */}
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* section one */}
      <div className="container" style={{ marginTop: "8%" }}>
        <div className="row">
          <h2 className="abtComTitle">Welcome To Our Industry</h2>
        </div>
        <div className="row ">
          <div className="col-4">
            <img
              class="abtComImg "
              src={abtUs}
              alt=""
              style={{ width: "100%", marginTop: "5%", borderRadius: 12 }}
            />
          </div>
          <div className="col-8">
            <h4>Cognizant Chemical</h4>

            {/* <h2 className="abtComTitle">Cognizant Chemical</h2> */}
            <br />
            <span>
              Darshan Chemicals was started in 1990, company initially started
              with trading and manufacturing textile chemicals. In 1998 company
              diversified and started its first distillation plants, since then
              it has come a long way and has become a preferred name for all the
              distillation and contract manufacturing requirements.
              <br /> <br />
              Our meticulously designed distillation units help us to achieve
              high production efficiency enabling us to give our clients final
              product of required quality with desired yield, on time and at
              competitive costs. <br />
            </span>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <h2 className="serviceHeadline">The Best Services</h2>
        <h5>we provide</h5>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row ">
          <div className="col-6 serviceDetails animate__animated animate__bounce">
            <div className="row ">
              <div className="col-4 text-center">
                
                  <div className="icon-box ">
                  <img
                  className="serviceImages"
                  src={serviceImg1}
                  alt="Second slide"
                
                />
                  </div>
                  
              
                {/* <img
                  class=""
                  src={serviceImg1}
                  alt="Second slide"
                  style={{
                    width: "70px",
                    borderRadius: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                /> */}
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">Azeotropic Distillation</h5>
                <span>
                  Specially designed Plant to handle Azeotropic Distillation of
                  mixtures such as
                </span>
                <ul className="">
                  <li>Iso Propyl Alcohol (IPA) + Water</li>
                  <li>Ethyl Acetate (EA) + Methanol (MeOH)</li>
                  <li>Acetonitrile (ACN) + Toluene (Tol)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 serviceDetails">
            <div className="row">
              <div className="col-4 text-center">
              <div className="icon-box">
                  <img
                  className="serviceImages"
                  src={serviceImg1}
                  alt="Second slide"
                
                />
                  </div>
                {/* <img
                  class=""
                  src={serviceImg1}
                  alt="Second slide"
                  style={{
                    width: "70px",
                    borderRadius: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                /> */}
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">
                  High Vacuum Fractional Distillation
                </h5>
                <span>
                  Distillation of following mixtures is carried out at high
                  Vacuum up to 1 Torr.
                </span>
                <ul className="">
                  <li>
                    Mono Ethylene Glycol (MEG) + Diethylene Glycol (DEG) +
                    Triethylene Glycol (TEG)
                  </li>
                  <li>Glycerin</li>
                  <li>N Methyl Pyrrolidone (NMP) + Water</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 serviceDetails ">
            <div className="row">
              <div className="col-4 text-center">
              <div className="icon-box">
                  <img
                  className="serviceImages"
                  src={serviceImg1}
                  alt="Second slide"
                
                />
                  </div>
                {/* <img
                  class=""
                  src={serviceImg1}
                  alt="Second slide"
                  style={{
                    width: "70px",
                    borderRadius: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                /> */}
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">Extractive Distillation</h5>
                <span>
                  We have specially designed for handling Extractive
                  Distillation of solvents such as
                </span>
                <ul className="">
                  <li>Tetrahydrofuran (THF) + Methylene Dichloride (MDC)</li>
                  <li>N Heptane (N Hep) + Toluene (Tol)</li>
                  <li>Ethanol (EOH) + Water</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 serviceDetails">
            <div className="row">
              <div className="col-4 text-center">
              <div className="icon-box">
                  <img
                  className="serviceImages"
                  src={serviceImg1}
                  alt="Second slide"
                
                />
                  </div>
                {/* <img
                  class=""
                  src={serviceImg1}
                  alt="Second slide"
                  style={{
                    width: "70px",
                    borderRadius: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                /> */}
              </div>
              <div className="col-8">
                <h5 className="serviceTitle">
                  Highly Volatile Solvents Distillation
                </h5>
                <span>
                  High no of theoretical stages and efficient cooling enable
                  good separation of solvents such as THF, IPE,Acetone, MDC etc.
                  with maximum yield.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sevices end */}
      {/* clients */}
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <h2 className="serviceHeadline">Our Clients</h2>
        <h5>They are awesome people</h5>
      </div>
      <div className="container-fluid my-5 ">
        <div
          id="multi-item-example"
          class="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          {/* <div class="controls-top">
              <a
                class="btn-floating"
                href="#multi-item-example"
                data-slide="prev"
              >
       <FacebookIcon/>
              </a>
              <a
                class="btn-floating"
                href="#multi-item-example"
                data-slide="next"
              >
               <FacebookIcon/>
              </a>
            </div> */}

          <ol class="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner text-center" role="listbox">
            <div class="carousel-item active mb-2">
              <div class="row">
                <div class="col-md-3">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={techNova}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={arch}
                      alt="Card image cap"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={tagros}
                      alt="Card image cap"
                      style={{ width: "58%" }}
                    />
                  </div>
                </div>
                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top mt-4"
                      src={polygel}
                      alt="Card image cap"
                      style={{ width: "58%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item mb-2">
              <div class="row">
                <div class="col-md-3">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={proVentus}
                      alt="Card image cap"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={malladi}
                      alt="Card image cap"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top mt-4"
                      src={kothari}
                      alt="Card image cap"
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>
                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={reliance}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item mb-2">
              <div class="row">
                <div class="col-md-3">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={srichementor}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={strides}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={techNova}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
                <div class="col-md-3 clearfix d-none d-md-block">
                  <div class="mb-2">
                    <img
                      class="card-img-top"
                      src={techNova}
                      alt="Card image cap"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
