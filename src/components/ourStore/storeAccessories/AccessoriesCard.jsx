import React from "react";

export default function AccessoriesCard({
  image,
  newText,
  title,
  price,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  experienceClass,
  color12,
  lightBg,
  upText,
  appleSpecailPr,
  textLightColor,
  darkBg,
  darkerBg,
}) {
  return (
    <div className={`accessoriesCard ${lightBg} ${darkBg} ${darkerBg}`}>
      <img src={image} alt="" className={`heroImg ${experienceClass} ${appleSpecailPr}`} />
      <div className="colors">
        <img src={color1} alt="" />
        <img src={color2} alt="" />
        <img src={color3} alt="" />
        <img src={color4} alt="" />
        <img src={color5} alt="" />
        <img src={color6} alt="" />
        <img src={color7} alt="" />
        <img src={color8} alt="" />
        <img src={color9} alt="" />
        <img src={color10} alt="" />
        <img src={color11} alt="" />
        <img src={color12} alt="" />
      </div>
      <div className={`accessoriesText ${upText} ${textLightColor}`}>
        <p className="newText">{newText}</p>
        <h6 className="title">{title}</h6>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
