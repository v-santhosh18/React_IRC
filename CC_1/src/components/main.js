
import React from 'react';
import menu from '../assets/image/menu.png';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className="main-content">
      <nav className="navbar navbar-expand-md" id="navbar-color">
        <div className="container">
         
          <button className="navbar-toggler" type="button">
            <span><i><img src={menu} alt="" width="30px" /></i></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Top Chair</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Chair</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Brands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <h1>
          Make Your Home
          <br />
          Modern Design.
        </h1>
        <p>Transforming Spaces, Inspiring Lives.Where Your Style Meets Home.</p>
        <div id="btn1">
          <button>

          <Link to='/signup'>Shop Now</Link>
          </button>
      </div>
    </div>
    </div>
  );
};

export default Main;
