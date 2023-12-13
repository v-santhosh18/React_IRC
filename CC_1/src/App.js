import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import '../src/assets/css/login.css';
import'../src/assets/css/about.css';
import'../src/assets/css/card1.css';
import'../src/assets/css/card2.css';
import'../src/assets/css/card3.css';
import'../src/assets/css/footer.css';
import'../src/assets/css/main.css';
import'../src/assets/css/navbar.css';

import Store from './components/store';
// import Login from './components/login';
 import Signup from './components/signup';
function App() {
  return (
   <>
   <Router>
          <Routes>
              <Route path="/" element={<Store/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>
    </Router>
   </>

  );
}

export default App;
