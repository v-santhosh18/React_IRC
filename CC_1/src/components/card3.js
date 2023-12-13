import React from 'react';
import card1 from '../assets/image/card1.png';
import card2 from '../assets/image/card2.png';
import card3 from '../assets/image/card3.png';
import card4 from '../assets/image/card4.png';
import card5 from '../assets/image/card5.png';
import card6 from '../assets/image/card6.png';
import card7 from '../assets/image/card7.png';
import card8 from '../assets/image/card8.png';

const Card3 = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center" style={{ marginTop: '50px' }}>TRENDY PRODUCTS</h3>
        <div className="row" style={{ marginTop: '50px' }}>
   
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card1} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Best Sofa</h3>
                <p className="card-text text-center">$1000.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card2} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">New Sofa</h3>
                <p className="card-text text-center">$100.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card3} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">New Chair</h3>
                <p className="card-text text-center">$300.20</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>

          
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card4} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Modern Chair</h3>
                <p className="card-text text-center">$500.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row" style={{ marginTop: '50px' }}>
      
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card5} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Best Sofa</h3>
                <p className="card-text text-center">$200.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>

          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card6} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Sofa Chair</h3>
                <p className="card-text text-center">$100.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>

         
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card7} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Table Chair</h3>
                <p className="card-text text-center">$150.50</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card" id="c">
              <img src={card8} alt="" className="card image-top" />
              <div className="card-body">
                <h3 className="card-titel text-center">Hanging Chair</h3>
                <p className="card-text text-center">$500.60</p>
                <div id="btn3"><button>Shop Now</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
