import { Link } from "react-router-dom";

export default function AirPodIntro({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="airPod" key={data.id}>
          <img src="/assets/homeImages/aBg.png" alt="" className="imageText" />
          <img src="/assets/homeImages/a.png" alt="" className="imageAirPod" />
          <p className="price">{data.price}</p>
          <div className="texts">
            <Link to="/" className="buyNow">
              buy
            </Link>
            <Link to={`/products/${data.linkTo}`} className="more">
              <span>learn more</span>{" "}
              <div className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
