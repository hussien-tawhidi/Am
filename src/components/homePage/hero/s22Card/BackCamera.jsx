import React from "react";
import { Link } from "react-router-dom";

export default function BackCamera({ cardData, id }) {
  return (
    <>
      {cardData.map((data) => (
        <div key={data.id}>
          <div className="backCamera" >
          <div className="texts">
            <div className="camera1 camera">
              <p className="camera1title title">{data.camera1title}</p>
              <p className="camera1text text">{data.camera1text}</p>
            </div>
            <div className="camera2 camera">
              <p className="camera2title title">{data.camera2title}</p>
              <p className="camera2text text">{data.camera2text}</p>
            </div>
            <div className="camera3 camera">
              <p className="camera4title title">{data.camera4title}</p>
              <p className="camera4text text">{data.camera4text}</p>
            </div>
          </div>
          <div className="image">
            <img
              src={data.frontCameraImage}
              alt=""
              className="heroImage img-fluid"
            />
          </div>
        </div>
          <div className="samsungLinks">
            <Link to="/airpods" className="link">
              See All Samsung Phone
            </Link>
            <Link to={`/products/${data.id}`} className="more">
              <span>learn more</span>
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
