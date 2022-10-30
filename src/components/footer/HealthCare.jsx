import React, { useState } from "react";
import { healthCate } from "../../data/FakeData";
export default function HealthCare() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        HealthCare
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
        {healthCate.map((learn) => (
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
