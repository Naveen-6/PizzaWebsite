import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'  style={{ backgroundImage: `url(${MultiplePizzas})` }}>
               
        </div>
        <div className='aboutBottom'>
              <h1>ABOUT US</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus eius assumenda rerum exercitationem, quidem incidunt tempore consequuntur! Eos nesciunt ullam excepturi ad! Nemo nostrum ex amet eum architecto accusamus.</p>
        </div>
    </div>
  )
}

export default About