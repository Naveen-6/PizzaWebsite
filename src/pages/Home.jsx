import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className='headerContainer'>
     <h1>PIZZA STORE</h1>
     <p>FIT TO ANY TASTE</p>
     <button>
     <Link to="/menu">
        ORDER NOW 😋
     </Link>
     </button>
    </div>
    </div>
  )
}

export default Home