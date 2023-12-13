import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <h1 className="text-center">FurniHub</h1>
      <p className="text-center">Need assistance or have a question? Our dedicated customer support team is here to help. Reach out to us through our contact form or give us a call. </p>
      <div className="icons text-center">
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-facebook"></i>
        <i className="bx bxl-google"></i>
        <i className="bx bxl-instagram"></i>
      </div>
      <div className="copyright text-center">
        &copy; Copyright <strong><span>FurniHub</span></strong>. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
