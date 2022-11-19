import { Link } from "react-router-dom";

export default function LatestOnStoreCard({
  image,
  model,
  slogan,
  price,
  bg,
  imageNotFull,
  linkto,
}) {
 
  return (
    <Link to={linkto} className={`latest-on-store-card ${bg}`} >
      <img src={image} alt="" className={`mainImg ${imageNotFull}`} />
      <div className="text">
        <p className="model">{model}</p>
        <p className="slogan">{slogan}</p>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
}
