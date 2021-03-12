import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import $ from "jquery";
import "./navbar.css"

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
               <a href="#" class="navbar-brand text-uppercase font-weight-bold">
                 Cognizant Chemicals
               </a>
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
                       href="#"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Products
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="#"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       QC & RD
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="#"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Safety
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="#"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Legal Compliance
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="#"
                       class="nav-link text-uppercase font-weight-bold"
                     >
                       Our Clients
                     </a>
                   </li>
                   <li class="nav-item">
                     <a
                       href="#"
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


















