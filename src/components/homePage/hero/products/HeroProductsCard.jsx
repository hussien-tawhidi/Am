import { Link } from "react-router-dom";

export default function HeroProductsCard({
  title,
  logo,
  slogan,
  model,
  heroImg,
  linkTo
}) {
  return (
    <div className="heroCard">
      <div className="text">
        <div className="title">
          <img src={logo} alt="" className="logo" />
          <h5>{title}</h5>
        </div>
        <p>{slogan}</p>
        <p>{model}</p>
        <div className="links">
          <Link to={`/products/`} className="buyNow">
            buy
          </Link>
          <Link to={`/products/${linkTo}`} className="more">
            <span>learn more</span>{" "}
            <div className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
      <img src={heroImg} alt="" className="heroImg" />
    </div>
  );
}
