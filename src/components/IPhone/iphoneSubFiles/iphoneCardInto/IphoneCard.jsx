import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function IphoneCard({
  id,
  bg,
  textClass,
  card3TextClass,
  newText,
  model,
  textGradeint,
  title,
  priceText,
  buyNow,
  image,
  price,
  

}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };

  return (
    <>
      <div className={`iphone-card ${bg}`} id={id}>
        <div className={`texts ${textClass} ${card3TextClass}`}>
          <span>{newText}</span>
          <p className="model">{model}</p>
          <h2 className={`title ${textGradeint}`}>{title}</h2>
          <p className="price">{priceText}</p>
          <div className="buttons">
            <div className={` ${buyNow}`} onClick={onAddToCard}>
              buy
            </div>
            <Link to="/accessories" className="more">
              <span>more accessories for</span>{" "}
              <div className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
           
          </div>
        </div>
      </div>
    </>
  );
}
