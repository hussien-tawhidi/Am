
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../store/cardSlice";

export default function Ipad({ id, linkTo, title, image,price}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <>
      <div className="ipad" key={id}>
        <div className="text">
          <h6>{title}</h6>
          <p>
            supercharged <img src="/assets/homeImages/icon.png" alt="" />
          </p>
          <div className="links">
            <Link to={`/products/${id}`} className="more">
              learn more{" "}
              <div className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
            <div className="buyNow" onClick={onAddToCard}>
              buy
            </div>
          </div>
        </div>
        <img src={image} alt="" className="heroImg" />
      </div>
    </>
  );
}
