import React, { useState } from "react";
import {  business } from "../../../data/FakeData";
export default function Business() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        with business
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
        {business.map((learn) => (
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
