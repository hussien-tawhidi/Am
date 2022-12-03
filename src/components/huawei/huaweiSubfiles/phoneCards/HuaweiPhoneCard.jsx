import { Link } from "react-router-dom";

export default function HuaweiPhoneCard({
  id,
  image,
  title,
  text,
  newText,
  size,
  direction,
  learnMore,
}) {
  return (
    <div className="huawieCardOne">
     
          <div className={`singleCard  ${direction}`} >
            <img src={image} alt="" />
            <div className="text">
              <div className="titleTop">
                <span>{newText}</span>
                <span>{size}</span>
              </div>
              <h5>{title}</h5>
              <p>{text}</p>
              <Link to={learnMore}>More Phones</Link>
            </div>
          </div>
        </div>
     
  );
}
