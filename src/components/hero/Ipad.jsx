import React from "react";

export default function Ipad() {
  return (
    <div className="ipad">
      <div className="text">
        <h6>iPad Pro</h6>
        <p>
          supercharged <img src="/assets/homeImages/icon.png" alt="" />
        </p>
        <div className="links">
          <a href="/" className="more">
            learn more{" "}
            <div className="icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </a>
          <a href="/" className="buyNow">
            buy
          </a>
        </div>
      </div>
      <img src="/assets/homeImages/ipad.jpg" alt="" className="heroImg" />
    </div>
  );
}
