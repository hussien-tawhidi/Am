import { Link } from "react-router-dom";

export default function Ipad({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="ipad" key={data.id}>
          <div className="text">
            <h6>iPad Pro</h6>
            <p>
              supercharged <img src="/assets/homeImages/icon.png" alt="" />
            </p>
            <div className="links">
              <Link to={`/products/${data.linkTo}`} className="more">
                learn more{" "}
                <div className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </Link>
              <a href="/" className="buyNow">
                buy
              </a>
            </div>
          </div>
          <img src="/assets/homeImages/ipad.jpg" alt="" className="heroImg" />
        </div>
      ))}
    </>
  );
}
