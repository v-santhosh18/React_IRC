import React from 'react';
import c1 from '../assets/image/c1.png';
import c2 from '../assets/image/c2.png';
import c3 from '../assets/image/c3.png';
const Card1 = () => {
  return (
    <div className="container">
      <h3 className="text-center" style={{ paddingTop: '30px' }}>SERVICES WE OFFER</h3>
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <img src={c1} alt="" className="card image-top" height="200px" />
            <div className="card-body">
              <h5 className="card-titel text-center">CUSTOM MENUS</h5>
              <p className="text-center">Celebrate special moments with our tailor-made custom menus, designed to complement the essence of your occasion.</p>
              <div id="btn2" className="text-center"><button>View More</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <img src={c2} alt="" className="card image-top" height="200px" />
            <div className="card-body">
              <h5 className="card-titel text-center">AFFORDABLE LUXURY</h5>
              <p className="text-center">At FurniHub, we believe that everyone deserves to have a home they love without breaking the bank. </p>
              <div id="btn2" className="text-center"><button>View More</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <img src={c3} alt="" className="card image-top" height="200px" />
            <div className="card-body">
              <h5 className="card-titel text-center">USER FRIENDLY</h5>
              <p className="text-center">Enjoy the convenience of FurniHub. Our user-friendly website makes it easy to browse, select, and order.</p>
              <div id="btn2" className="text-center"><button>View More</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
