import React from 'react';
import food from '../assets/food.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${food})`}}>
        <div className="headerContainer">
            <h1>Foot corner</h1>
            <p>VIETNAM FOOD AT A CLICK</p>

            <Link>
                <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
