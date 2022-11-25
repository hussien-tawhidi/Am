import { Link } from "react-router-dom";

export default function HuaweiCardOne({
  id,
  title,
  image,
  size,
  text,
  newText,
  learnMore,
  direction,
}) {
  return (
    <div className="huawieCardOne">
      <div className={`container singleCard ${direction}`}>
        <img src={image} alt="" />
        <div className="text">
          <div className="titleTop">
            <span>{newText}</span>
            <span>{size}</span>
          </div>
          <h5>{title}</h5>
          <p>{text}</p>
          <Link to={`/products/${id}`}>{learnMore}</Link>
        </div>
      </div>
    </div>
  );
}
