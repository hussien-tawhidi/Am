import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";
export default function Card({
  id,
  title,
  image,
  price,
  colorDark,
  newText,
  model,
  slogan,
  bgBlue,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div>
      <div className={`macCard ${colorDark}`}>
        <img src={image} alt="" />
        <div className="texts">
          <p className="new">{newText}</p>
          <span className="model">{model}</span>
          <h6 className="model">{title}</h6>
          <h6 className="slogan">{slogan}</h6>
          <p className="price">${price}</p>
          <div className="buttons">
            <div className={`buyNow ${bgBlue}`} onClick={onAddToCard}>
              buy
            </div>

            <Link to={`/products/${id}`} className="more">
              <span>learn more</span> <div className="icon"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
