import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
         <div className='socialMedia'>
         <Link to="https://www.instagram.com/"><InstagramIcon/> </Link>

         <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/>
         </div>
         <p>&copy; 2024 Pizza.com</p>
    </div>
  );
}

export default Footer