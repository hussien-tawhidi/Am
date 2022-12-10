import React from "react";
import { Link } from "react-router-dom";

export default function MoreProduct() {
  return (
    <div className='more-product'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className='single-more'>
            <img src='/assets/homeImages/poster1.jpg' alt='' />

            <Link to='/airpods' className='title one'>
              let's join from listening musixcs
            </Link>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='tow-more'>
            <div className='single-more'>
              <img src='/assets/homeImages/poster2.jpg' alt='' />
              <Link to='/iphone' className='title tow'>
                most sell and most wanted phones
              </Link>
            </div>

            <div className='single-more'>
              <img src='/assets/homeImages/poster3.jpg' alt='' />
              <Link to='/watch' className='title three'>
                everywhere in any time just with you
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
