import React, { useEffect, useState } from "react";
import abtUs from "../../img/serviceBanner.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import legal from "../../img/download.jpg";
import "./product.css";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    cursor: "pointer",
  },
  media: {
    height: 140,
  },
});

function Product() {
  const [product, setProduct] = useState(1);
  console.log(product);
  const classes = useStyles();
  return (
    <div className="">
      <Navbar />
      <div className="">
        <img src={abtUs} alt="about" className="d-block w-100" />
        <div className="container">
          <h2 className="aboutbannertext">Services</h2>
        </div>
      </div>
      <div
        className="container text-center"
        style={{ marginTop: "", marginBottom: "3%" }}
      >
        <h2 className="serviceHeadline">Services</h2>
        <h5>Better customer service start with better understandingwe provide</h5>
        <h6 className="mt-5">We carry out different types of Distillation Processes in our
           plant which enable us to separate various combinations of products.</h6>

      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <Card
              className={classes.root}
              onClick={() => setProduct(1)}
              style={{
                border: `3px solid ${
                  product === 1 ? "#ffd200" : "white"
                }`,
              }}
            >
              <CardMedia
                className={classes.media}
                image={legal}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  Azeotropic Distillation
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className={classes.root} onClick={() => setProduct(2)}
            style={{
              border: `3px solid ${
                product === 2 ? "#ffd200" : "white"
              }`,
            }}
            >
              <CardMedia
                className={classes.media}
                image={legal}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  Fractional Distillation
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className={classes.root} onClick={() => setProduct(3)}
            style={{
              border: `3px solid ${
                product === 3 ? "#ffd200" : "white"
              }`,
            }}
            >
              <CardMedia
                className={classes.media}
                image={legal}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  Extractive Distillation
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className={classes.root} onClick={() => setProduct(4)}
            style={{
              border: `3px solid ${
                product === 4 ? "#ffd200" : "white"
              }`,
            }}
            >
              <CardMedia
                className={classes.media}
                image={legal}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h5">
                  Azeotropic Distillation
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div
          className="container text-center"
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <h5 className="productHeadline"> Azeotropic Distillation</h5>
        </div>
      </div> */}

      {/* Product 1 */}
      {product === 1 && (
        <div
          className="container "
          style={{ marginTop: "5%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <h2 className="">Azeotropic Distillation</h2>
          <div data-aos="zoom-in">
          <span>
            <br />
            Specially designed Plant to handle Azeotropic Distillation of
            mixtures such as :
            <br />
            <br />
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
          </span>
</div>
        </div>
      )}
      {/* Product 2 */}
      {product === 2 && (
        <div
          className="container "
          style={{ marginTop: "5%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <h2 className="">Fractional Distillation</h2>
          <div data-aos="zoom-in">
          <span>
            <br />
            Specially designed Plant to handle Azeotropic Distillation of
            mixtures such as :
            <br />
            <br />
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
          </span>
          </div>
        </div>
      )}
{/* Product 3 */}
{product === 3 && (
        <div
          className="container "
          style={{ marginTop: "5%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <h2 className="">Extractive Distillation</h2>
          <div data-aos="zoom-in">
          <span>
            <br />
            Specially designed Plant to handle Azeotropic Distillation of
            mixtures such as :
            <br />
            <br />
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
          </span>
          </div>
        </div>
      )}
      {/* Product 4 */}
      {product === 4 && (
        <div
          className="container "
          style={{ marginTop: "5%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <h2 className="">Azeotropic Distillation</h2>
          <div data-aos="zoom-in">
          <span>
            <br />
            Specially designed Plant to handle Azeotropic Distillation of
            mixtures such as :
            <br />
            <br />
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-center checkIcon">
                <CheckIcon />
              </div>
              <div className="col-md-10">
                <span>Iso Propyl Alcohol (IPA) + Water</span>
              </div>
            </div>
          </span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Product;
