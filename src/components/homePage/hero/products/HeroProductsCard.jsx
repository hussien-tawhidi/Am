import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function HeroProductsCard({
  title,
  logo,
  slogan,
  model,
  image,
  price,
  id,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };

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
          <div className="buyNow" onClick={onAddToCard}>buy</div>
          <Link to={`/products/${id}`} className="more">
            <span>learn more</span>
            <div className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
      <img src={image} alt="" className="heroImg" />
    </div>
  );
}
