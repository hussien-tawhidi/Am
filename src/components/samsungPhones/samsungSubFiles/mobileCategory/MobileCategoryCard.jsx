import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddItemToCard } from "../../../../store/cardSlice";
export default function MobileCategoryCard({
  id,
  newText,
  compare,
  image,
  color1,
  color2,
  color3,
  title,
  beforePrice,
  nowPrice,
  buyNow,
  learnMore,
  price
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="samsung-category-card shadow">
      <div className="icons">
        <p className="newText">{newText}</p>
        <p className="compare">{compare}</p>
      </div>
      <img src={image} alt="" className="card-img heroImg" />
      <div className="colors">
        <img src={color1} alt="" />
        <img src={color2} alt="" />
        <img src={color3} alt="" />
      </div>
      <div className="card-footer custome-footer">
        <h6>{title}</h6>
        <div className="price">
          <del>{beforePrice}</del>
          <p>${nowPrice}</p>
        </div>
        <div className="buttons">
          <div className={`buyNow `} onClick={onAddToCard}>
            {buyNow}
          </div>
          <Link to={`/products/${id}`} className="more">
            <span>{learnMore}</span>{" "}
            <span className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
