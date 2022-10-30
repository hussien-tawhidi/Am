import React, { useState } from "react";
import { appleValue } from "../../data/FakeData";
export default function AppleValues() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        apple values
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
        {appleValue.map((learn) => (
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
