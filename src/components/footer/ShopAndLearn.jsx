import React, { useState } from "react";
import { shopAndLearn } from "../../data/FakeData";
export default function FooterCard() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        shop and learn{" "}
        <span
          className={footerMenu ? "icon showFooterMenu" : "icon"}
          onClick={onFooterMenu}
        >
          +
        </span>
      </h1>
      <div className={footerMenu?"footerCardMenuConent showFooterCardMenuConent":"footerCardMenuConent"}>
        {shopAndLearn.map((learn) => (
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
