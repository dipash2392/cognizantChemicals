import React, { useEffect } from "react";
import abtUs from "../img/carousel.jpg";
import "./about.css";
import "../App.css";
import $ from "jquery";
import founder from "../img/founder.png";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Gallery from "./Gallery/Gallery";
import chairman from "../img/chairman.jpg";
import director1 from "../img/director1.jpg";
import director2 from "../img/director2.jpg";
import director3 from "../img/director3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    hrigth: 200,
    width: 300,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


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
      <Navbar />
      <div className="">
        {/* <Carousel/> */}
        <img src={abtUs} alt="about" className="d-block w-100 abtBannerImg" />
        <div className="container" style={{ marginTop: "-10%" }}>
          <h2
            className="aboutbannertext"
            style={{ borderBottom: "3px solid red" }}
          >
            About Us
          </h2>
        </div>
      </div>
      {/* section one */}
      <div className="container" style={{ marginTop: "13%" }}>
        <div className="row ">
          <div className="col-6 " >
            <h2 className="abtComTitle">Our Managing Directors</h2>
            <div data-aos="zoom-in">
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
              <span className="" style={{ color: "#00203FFF", fontSize: 30 }}>
                -{" "}
              </span>
              <span className="name">S. Venkatesan Mudliar</span>
            </div>
            <div className="text-right">
              <span className="bold">Chairman & Managing Director</span>
            </div>
            </div>
          </div>
          <div className="col-6 text-center ">
            <img class="abtComImg mt-5 " src={chairman} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row text-center ">
          <div className="col-md-4">
            <Card className="p-2 hvr-reveal" >
              <img
                class="abtComImg mt-3"
                src={director1}
                alt=""
                style={{ width: "55%" }}
              />
              <br />
              <div data-aos="zoom-in">
              <span className="" style={{ padding: "2%" }} >
                <br />
                All appreciated things don't come early it's either hard work or
                luck that brings it to you & Cognizant Group is hard work of S.
                Venkatasen Mudliar. The other part of it being cooperation as
                Miss's Usha V. Mudliar.
                <br />
                <br />
              </span>
              <div className="text-right mt-3">
                <span className="" style={{ color: "#00203FFF", fontSize: 30 }}>
                  -{" "}
                </span>
                <span className="name">Mrs. Usha Mudliar</span>
              </div>
              <div className="text-right">
                <span className="bold">Chairman & Managing Director</span>
              </div>
              </div>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon className="" style={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon className=" " style={{ fontSize: "30px" }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="p-2 hvr-reveal">
              <img
                class="abtComImg mt-3"
                src={director3}
                alt=""
                style={{ width: "55%" }}
              />
              <br />
              <div data-aos="zoom-in">
              <span className="" style={{ padding: "2%" }}>
                <br />
                Further progress has also been made in the adoption of
                Cognizant’s advanced blasting services by customers in Dubai,
                Srilanka, and Singapore. These services have become a key
                contributor to Cognizant’s contract wins and extensions.
                <br />
              </span>
              <div className="text-right mt-3">
                <span className="" style={{ color: "#00203FFF", fontSize: 30 }}>
                  -{" "}
                </span>
                <span className="name">Mr. Pravin Mudliar</span>
              </div>
              <div className="text-right">
                <span className="bold">Director</span>
              </div>
              </div>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon className="" style={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon className=" " style={{ fontSize: "30px" }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="p-2 hvr-reveal">
              <img
                class="abtComImg mt-3"
                src={director2}
                alt=""
                style={{ width: "55%" }}
              />
              <br />
              <div data-aos="zoom-in">
              <span className="" style={{ padding: "2%" }}>
                <br />
                Cognizant’s broad operating footprint, a determined self-help
                agenda and a focus on differentiated products and services,
                enabled the Company to deliver a resilient performance against
                considerable headwinds in 2019.
                <br /><br/>
              </span>
              <div className="text-right mt-3">
                <span className="" style={{ color: "#ffd200", fontSize: 30 }}>
                  -{" "}
                </span>
                <span className="name">Mr. Rupesh Mudliar</span>
              </div>
              <div className="text-right">
                <span className="bold">Director</span>
              </div>
              </div>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon className="" style={{ fontSize: "30px" }} />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon className=" " style={{ fontSize: "30px" }} />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      {/* Services */}

      <div
        className="container-fluid"
        style={{ marginTop: "5%", backgroundColor: "#ADEFD1FF", padding: "5%" }}
      >
        <div className="row ">
          <div className="col-6 serviceDetails">
            <div className="row" data-aos="fade-right">
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
            <div className="row" data-aos="fade-left">
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
      {/* ****Gallery**** */}
      <div className="mt-5">
      <div className="container text-center" style={{ marginTop: "5%" ,marginBottom:"3%"}}>
        <h2 className="serviceHeadline">Our Memories</h2>
      </div>
        <Gallery />
      </div>
      {/* Sevices end */}
      {/* clients */}
      {/* <div className="container text-center" style={{ marginTop: "5%" }}>
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
      </div> */}
      <Footer />
    </div>
  );
}
export default Home;
