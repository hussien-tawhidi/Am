import React from "react";

export default function ServicesCard({ icon, title, text, link }) {
  return (
    <div className="servicesCard">
      <img src={icon} alt="" />
      <h6>{title}</h6>
      <p>{text}</p>
      <a href="/">{link}  <i className="fa-solid fa-angle-right"></i></a>
    </div>
  );
}
