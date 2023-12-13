
import React from 'react';
import twitter from '../assets/image/twitter.png';
import facebook from '../assets/image/facebook.png';
import google from '../assets/image/google-plus.png';
import search from '../assets/image/search.png';
import heart from '../assets/image/heart.png';
import shopping_cart from '../assets/image/shopping-cart.png';


const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-top">
        <div className="social-link">
          <i><img src={twitter} alt="" width="30px" /></i>
          <i><img src={facebook} alt="" width="30px" /></i>
          <i><img src={google} alt="" width="30px" /></i>
        </div>
        <div className="logo">
          <h3>FurniHub</h3>
        </div>
        <div className="icons">
          <i><img src={search} alt="" width="20px" /></i>
          <i><img src={heart} alt="" width="20px" /></i>
          <i><img src={shopping_cart} alt="" width="25px" /></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
