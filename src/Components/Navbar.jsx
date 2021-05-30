import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import $ from "jquery";
import "./navbar.css"
import logo from "../img/logo.png"


function App() {
  useEffect(() => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
          $(".navbar").addClass("active");
        } else {
          $(".navbar").removeClass("active");
        }
      });
    });
  }, []);
  return (
    <div className="App">
     
     <div>
         
         {/* <!-- Navbar--> */}
         <header class="header">
           <nav class="navbar navbar-expand-lg fixed-top py-3">
             <div class="container">
               <div class="logoDiv">

               <img src={logo} className="mr-1"/>
               <a href="#" class="navbar-brand text-uppercase font-weight-bold">
                 Cognizant Chemicals
               </a>
               </div>
               <button
                 type="button"
                 data-toggle="collapse"
                 data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                 aria-expanded="false"
                 aria-label="Toggle navigation"
                 class="navbar-toggler navbar-toggler-right"
               >
                 <MenuIcon style={{ color: "#fff" }} />
               </button>
 
               <div id="navbarSupportedContent" class="collapse navbar-collapse">
                 <ul class="navbar-nav ml-auto">
                   <li class="nav-item active">
                     <a
                       href="/"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Home <span class="sr-only">(current)</span>
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="/aboutus"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                     About Us                    </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="/plantDetails"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                     Plant Details                    </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="/service"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Services
                     </a>
                   </li>
                
                   <li class="nav-item">
                     <a
                       href="/safety"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Safety
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="/legalCompliance"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Legal Compliance
                     </a>
                   </li>
                  
                   <li class="nav-item">
                     <a
                       href="/contactUs"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Contact
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </nav>
         </header>
       </div>
    </div>
  );
}

export default App;


















