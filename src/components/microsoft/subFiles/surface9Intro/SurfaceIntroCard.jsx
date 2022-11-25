import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function SurfaceIntroCard({
  id,
  image,
  title,
  desc,
  processer,
  processerDetails,
  batteryLife,
  batteryLifeDetails,
  port,
  portDetails,
  bestFor,
  bestForDetails,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <>
      <div className="surfaceNineCard" key={id}>
        <div className="heroImg">
          <img src={image} alt="" className="" />
        </div>
        <div className="texts">
          <div className="title">
            <h5>{title}</h5>
            <p className="">{desc}</p>
          </div>
          <div className="single">
            <p className="subTitle">{processer}</p>
            <p className="desc">{processerDetails}</p>
          </div>
          <div className="single">
            <p className="subTitle">{batteryLife}</p>
            <p className="desc">{batteryLifeDetails}</p>
          </div>
          <div className="single">
            <p className="subTitle">{port}</p>
            <p className="desc">{portDetails}</p>
          </div>
          <div className="single">
            <p className="subTitle">{bestFor}</p>
            <p className="desc">{bestForDetails}</p>
          </div>
        </div>
        <div className="links">
          <div className="buyNow" onClick={onAddToCard}>buy now</div>
          <Link to={`/products/${id}`} className="more">
            learn more about this product ...
          </Link>
        </div>
      </div>
    </>
  );
}
