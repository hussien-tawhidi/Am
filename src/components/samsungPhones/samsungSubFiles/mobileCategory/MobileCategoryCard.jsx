import { Link } from "react-router-dom";

export default function MobileCategoryCard({ samsungMobiels }) {
  return (
    <div className="row">
      {samsungMobiels.map((mobile) => (
        <div className="col-sm-4 col-12 mb-4" key={mobile.id}>
          <div className="samsung-category-card shadow">
            <div className="icons">
              <p className="newText">{mobile.newText}</p>
              <p className="compare">{mobile.compare}</p>
            </div>
            <img src={mobile.image} alt="" className="card-img heroImg" />
            <div className="colors">
              <img src={mobile.color1} alt="" />
              <img src={mobile.color2} alt="" />
              <img src={mobile.color3} alt="" />
            </div>
            <div className="card-footer custome-footer">
              <h6>{mobile.title}</h6>
              <div className="price">
                <del>{mobile.beforePrice}</del>
                <p>{mobile.nowPrice}</p>
              </div>
              <div className="buttons">
                <a href="/" className={`buyNow `}>
                  {mobile.buyNow}
                </a>
                <Link to={`/products/${mobile.linkTo}`} className="more">
                  <span>{mobile.learnMore}</span>{" "}
                  <span className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
