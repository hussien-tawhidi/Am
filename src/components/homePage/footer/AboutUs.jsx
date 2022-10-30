import React, { useState } from "react";
import { aboutUs } from "../../../data/FakeData";
export default function AboutUs() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        Abouts
        <span
          className={footerMenu ? "icon showFooterMenu" : "icon"}
          onClick={onFooterMenu}
        >
          +
        </span>
      </h1>
      <div
        className={
          footerMenu
            ? "footerCardMenuConent showFooterCardMenuConent"
            : "footerCardMenuConent"
        }
      >
        {aboutUs.map((learn) => (
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
