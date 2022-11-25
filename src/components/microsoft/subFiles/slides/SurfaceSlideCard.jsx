import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function SurfaceSlideCard({
  id,
  image,
  title,
  text,
  learnMore,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="single-surafce" key={id}>
      <img src={image} alt="" />
      <div className="texts">
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <Link to={`/products/${id}`}>
          {learnMore}{" "}
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
        <div className="buyNow" onClick={onAddToCard}>buy now</div>
      </div>
    </div>
  );
}
