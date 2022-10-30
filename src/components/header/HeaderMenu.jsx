import React from "react";
import { headerData } from "../../data/FakeData";

export default function HeaderMenu({ showSearchContainer, searchContainer }) {
  return (
    <div className="header">
      <div className={searchContainer ? "logo hideHeaderSingleMenu" : "logo"}>
        <img src="/assets/logo.png" alt="logo" className="headerImg" />
      </div>
      <div className="menu">
        {headerData.map((header) => (
          <span  key={header.id}>
            <a
              href="/"
             
              className={searchContainer ? "hideHeaderSingleMenu" : ""}
            >
              {header.title}
            </a>
          </span>
        ))}
      </div>
      <div className="header-icons">
        <img
          src="/assets/icons/searchIcon.png"
          alt=""
          className={searchContainer?"headerImg searchIcon hideHeaderSingleMenu":"headerImg searchIcon"}
          onClick={showSearchContainer}
        />
        <img
          src="/assets/icons/shoppingcard.png"
          alt=""
          className={searchContainer?"headerImg hideHeaderSingleMenu":"headerImg "}
        />
      </div>
    </div>
  );
}
