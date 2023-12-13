import React from 'react';
import ch from '../assets/image/ch.png';
import sf from '../assets/image/sf.png';
import workDesk from '../assets/image/work desk.png';

const Card2 = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: '100px' }}>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card" id="tpc">
            <img src={ch} alt="" className="card image-top" />
            <div className="card-img-overlay">
              <h4 className="card-titel">Best Chair</h4>
              <p className="card-text"></p>
              <div id="btn2"><button>View More</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card" id="tpc">
            <img src={sf} alt="" className="card image-top" />
            <div className="card-img-overlay">
              <h4 className="card-titel">Sofa</h4>
              <p className="card-text"></p>
              <div id="btn2"><button>View More</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card" id="tpc">
            <img src={workDesk} alt="" className="card image-top" />
            <div className="card-img-overlay">
              <h4 className="card-titel">Work Desk</h4>
              <p className="card-text"></p>
              <div id="btn2"><button>View More</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
