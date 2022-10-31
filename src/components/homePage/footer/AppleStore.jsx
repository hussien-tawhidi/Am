import React, { useState } from "react";
import { appleStore } from "../../../data/FakeData";
export default function AppleStore() {
  const [footerMenu, setFooterMenu] = useState(false);

  const onFooterMenu = () => {
    setFooterMenu(!footerMenu);
  };
  return (
    <div className="footerCard">
      <h1 className="titleSubTitle">
        apple store
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
        {appleStore.map((learn) => (
    
            <div className="footerLinks" key={learn.id}>
              <a href="/">{learn.title}</a>
            </div>
   
        ))}
      </div>
    </div>
  );
}
