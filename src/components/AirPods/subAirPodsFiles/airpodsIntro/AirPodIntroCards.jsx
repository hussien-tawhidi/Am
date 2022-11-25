import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";
export default function AirPodIntroCards({
  id,
  title,
  generation,
  price,
  image,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <>
      <div className="introCard">
        <div className="texts">
          <h2 className="title">{title}</h2>
          <p className="generation">{generation}</p>
          <p className="price">${price}</p>
        </div>
        <div className="buttons">
          <div href="/" className="buyNow" onClick={onAddToCard}>
            buy
          </div>
          <Link to={`/products/${id}`} className="more">
            <span> Learn more</span>
            <span className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
