import React from "react";
import emailjs from "emailjs-com";
import contactUs from "../img/contactUs.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TextField from "@material-ui/core/TextField";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_qwq8vif",
        "template_6fw9hy8",
        e.target,
        "user_PxuZ0CnfZLkwqTwF5wknD"
      )
      .then(
        (result) => {
          console.log(result.text);
         
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Navbar />
      
      <img src={contactUs} alt="about" className="d-block w-100" />
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <h2 className="serviceHeadline">Contact Us</h2>
        <h5>Any question or remark? Just write us a message.</h5>
      </div>
      <div className="container text-center" style={{ marginTop: "5%" , paddingLeft:"10%", paddingRight:"10%"}}>
        <form className="contact-form" onSubmit={sendEmail}>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <br />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="email"
              placeholder="Enter email"
            />
            <br />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="phone_no"
              placeholder="Enter phone number"
            />
            <br />
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              type="text"
              name="message"
              placeholder="Enter message"
            />
            <br />
          </div>
          
          <button type="submit" class="btn btn-warning"  value="Send" >Submit</button>
       
        </form>
       
      </div>
      <Footer />
    </div>

  );
}
