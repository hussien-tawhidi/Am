import React from "react";

export default function MacCardTow({
  subTitle,
  title,
  text,
  linkBtn,
  buy,
  mainImg,
  link,
  lightColor,
  iphonePost,
  iphoneDarkBg
}) {
  return (
    <div className={`macPost ${iphonePost} ${iphoneDarkBg}`}>
      <img src={mainImg} alt="" />
      <div className={`texts ${lightColor}`}>
        <p className="subTitle">{subTitle}</p>
        <h5 className="title">{title}</h5>
        <p className={`text }`}>{text}</p>
        <a href="/" className={`linku ${buy} ${link}`}>
          {linkBtn}
        </a>
      </div>
    </div>
  );
}
