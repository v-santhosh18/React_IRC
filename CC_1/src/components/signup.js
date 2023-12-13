import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  
  };

  return (
    
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <Link to='/'>
          <button>Sign up</button>
          </Link>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
