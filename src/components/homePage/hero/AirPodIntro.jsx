import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../store/cardSlice";

export default function AirPodIntro({
  id,
  price,
  linkTo,
  textImage,
  image,
  title,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <>
      <div className="airPod" key={id}>
        <img src={textImage} alt="" className="imageText" />
        <img src={image} alt="" className="imageAirPod" />
        <p className="price">{price}</p>
        <div className="texts">
          <div className="buyNow" onClick={onAddToCard}>buy</div>
          <Link to={`/products/${id}`} className="more">
            <span>learn more</span>{" "}
            <div className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
