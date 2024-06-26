import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>At YooFoods, we believe in crafting culinary experiences that elevate everyday moments into extraordinary memories.</p>
            <button>
            <a 
            href="#explore-menu" 
            onClick={() => setMenu("menu")} 
            className={menu === "menu" ? "active" : ""}
          > View Menu</a></button>
        </div>
    </div>
  )
}

export default Header
