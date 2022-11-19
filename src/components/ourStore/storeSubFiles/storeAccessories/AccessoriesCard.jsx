
import { Link } from "react-router-dom";

export default function AccessoriesCard({
  image,
  newText,
  title,
  price,
  color1,
  color2,
  color3,
  experienceClass,
  lightBg,
  upText,
  appleSpecailPr,
  textLightColor,
  darkBg,
  darkerBg,
  bg,
  linkTo
}) {
  return (
    <Link to={`/products/${linkTo}`} className={`accessoriesCard ${lightBg} ${darkBg} ${darkerBg} ${bg}`}>
      <img src={image} alt="" className={`heroImg ${experienceClass} ${appleSpecailPr}`} />
      <div className="colors">
        <img src={color1} alt="" />
        <img src={color2} alt="" />
        <img src={color3} alt="" />
      </div>
      <div className={`accessoriesText ${upText} ${textLightColor}`}>
        <p className="newText">{newText}</p>
        <h6 className="title">{title}</h6>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
}
