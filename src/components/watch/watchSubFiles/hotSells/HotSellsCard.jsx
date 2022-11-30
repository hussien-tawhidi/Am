import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function HotSellsCard({ id, image, price, title, newText }) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="singleHotSells">
      <span className="hotsells">Hot Sells</span>
      <img src={image} alt="" className="heroImage" />
      <div className="texts">
        <span>{newText}</span>
        <p className="name">{title}</p>
        <p className="price">${price}</p>
        <div className="buttons">
          <div className="bgBlue" onClick={onAddToCard}>
            Buy Now
          </div>
          <Link to={`/products/${id}`} className="more">
            <span>learn more</span>{" "}
            <div className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
