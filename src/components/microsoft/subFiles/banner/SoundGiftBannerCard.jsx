import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function SoundGiftBannerCard({
  id,
  image,
  title,
  text,
  earbuds,
  headPhone,
  price,
  heroImage
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <>
      <div className="sound-gift-banner" key={id}>
        <img src={heroImage} alt="" className="heroImg" />
        <div className="texts">
          <h6>{title}</h6>
          <p>{text}</p>
          <div className="links">
            <Link to="/accessories" className="buuNow">
              {earbuds}
            </Link>
            <div className="more" onClick={onAddToCard}>
              <span>{headPhone}</span>{" "}
              <div className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
