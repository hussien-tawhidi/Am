import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function AccessoriesCard({
  id,
  accessories1,
  image,
  title,
  text,
  buyNow,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="row">
      <div className="col-12" key={id}>
        <div className={`iphoneAccessories ${accessories1}`}>
          <img src={image} alt="" className="heroImage" />
          <div className="texts">
            <h5>{title}</h5>
            <p>{text}</p>
            <div className="buttons">
              <div className={`buyNow `} onClick={onAddToCard}>
                {buyNow}
              </div>
              <Link to={`/products/${id}`} className="more">
                <span>learn more ...</span>{" "}
              </Link>
            </div>
            <Link to="/accessories" className="more-accessories more">
              <span>all accessories</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
