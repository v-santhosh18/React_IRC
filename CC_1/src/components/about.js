import React from 'react';
import about from '../assets/image/about.png';
const About = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{ marginTop: '50px' }}>ABOUT US</h1>
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-6 py-3 py-md-0">
          <div className="card">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="col-md-6 py-3 py-md-0">
          <p>
          Welcome to FurniHub, your go-to destination for stylish and affordable furniture. At FurniHub, we're on a mission to redefine the furniture shopping experience by offering a curated collection of high-quality pieces that cater to diverse tastes. Our commitment to quality craftsmanship, affordability, and a hassle-free shopping experience sets us apart. From classic to contemporary, FurniHub provides a range of furniture options to suit every style. We believe that everyone deserves a home they love, and our user-friendly website ensures a convenient and secure shopping journey. With a dedication to customer satisfaction, we invite you to explore FurniHub and transform your living spaces into havens of style and comfort. Welcome to FurniHub – where your dream home becomes a reality.At FurniHub, our focus on affordable luxury and commitment to delivering timeless designs allows you to create a home that reflects your unique personality. With a wide array of furniture options and a customer-centric approach, FurniHub is your trusted partner in making your living spaces both functional and aesthetically pleasing.
          </p>
          <div id="btn4"><button>Read More...</button></div>
        </div>
      </div>
    </div>
  );
};

export default About;
