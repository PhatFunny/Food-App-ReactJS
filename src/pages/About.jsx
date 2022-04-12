import React from 'react';
import vegthali from '../assets/food/vegthali.jpg';

import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${vegthali})`}}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Omnis ex dolorem cupiditate quas, pariatur adipisci? Expedita, culpa praesentium! 
          Laudantium repellendus tempora, consequuntur obcaecati molestias commodi autem vitae nemo 
          aut doloribus!
        </p>
      </div>
    </div>
  )
}

export default About