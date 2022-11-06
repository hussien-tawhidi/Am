import React from "react";

export default function SoundGiftBannerCard({ soundBanner }) {
  return (
    <>
      {soundBanner.map((sound) => (
        <div className="sound-gift-banner" key={sound.id}>
          <img src={sound.image} alt="" className="heroImg" />
          <div className="texts">
            <h6>{sound.title}</h6>
            <p>{sound.text}</p>
            <div className="links">
              <a href="/" className="buuNow">
                {sound.earbuds}
              </a>
              <a href="/" className="more">
                <span>{sound.headPhone}</span>{" "}
                <div className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
