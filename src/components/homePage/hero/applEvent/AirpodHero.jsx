import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function AirpodHero({
  id,
  appleIcon,
  title,
  desc,
  iconsTitle,
  iconsDesc,
  call,
  music,
  mic,
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
      <div className="airpodHero" key={id}>
        <div className="content">
          <div className="texts">
            <span className="appleLogo">{appleIcon}</span>
            <h5 className="title">{title}</h5>
            <p className="text">{desc}</p>
            <div className="buyNow">
              <Link to="/airpods">See all</Link>
              <Link to={`products/${id}`} className="more">
                See more{" "}
                <span className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </Link>
              <p className="buNow" onClick={onAddToCard}>
                buy now
              </p>
            </div>
          </div>
          <div className="icons">
            <p className="iconsTitle">{iconsTitle}</p>
            <p className="iconsDesc">{iconsDesc}</p>
            <div className="icon">
              <span className="call">{call}</span>
              <span className="call">{music}</span>
              <span className="call">{mic}</span>
            </div>
          </div>
        </div>
        <img src={image} alt="" className="heroImage" />
      </div>
    </>
  );
}
