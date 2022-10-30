import React, { useState } from "react";
import { acount } from "../../data/FakeData";
export default function FooterAccount() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
       account
        <span
          className={footerMenu ? "icon showFooterMenu" : "icon"}
          onClick={onFooterMenu}
        >
          +
        </span>
      </h1>
      <div className={footerMenu?"footerCardMenuConent showFooterCardMenuConent":"footerCardMenuConent"}>

      {acount.map((learn) => (
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
