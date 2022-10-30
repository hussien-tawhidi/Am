import React, { useState } from "react";
import {education } from "../../../data/FakeData";
export default function Education() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
       education
        <span
          className={footerMenu ? "icon showFooterMenu" : "icon"}
          onClick={onFooterMenu}
        >
          +
        </span>
      </h1>
      <div className={footerMenu?"footerCardMenuConent showFooterCardMenuConent":"footerCardMenuConent"}>

      {education.map((learn) => (
        <>
          <div className="footerLinks">
            <a href="/">{learn.title}</a>
          </div>
        </>
      ))}
      </div>
    </div>
  );
}
