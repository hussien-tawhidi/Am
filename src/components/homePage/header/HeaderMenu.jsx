import React from "react";
import { Link } from "react-router-dom";
import { headerData } from "../../../data/FakeData";

export default function HeaderMenu({ showSearchContainer, searchContainer }) {
  return (
    <div className="header">
      <Link to="/" className={searchContainer ? "logo hideHeaderSingleMenu" : "logo"}>
        <img src="/assets/logo.png" alt="logo" className="headerImg" />
      </Link>
      <div className="menu">
        {headerData.map((header) => (
          <span key={header.id}>
            <Link
              to={header.linkTo}
              className={searchContainer ? "hideHeaderSingleMenu" : ""}
            >
              {header.title}
            </Link>
          </span>
        ))}
      </div>
      <div className="header-icons">
        <img
          src="/assets/icons/searchIcon.png"
          alt=""
          className={
            searchContainer
              ? "headerImg searchIcon hideHeaderSingleMenu"
              : "headerImg searchIcon"
          }
          onClick={showSearchContainer}
        />
        <Link to="/shoppingcard">
          <img
            src="/assets/icons/shoppingcard.png"
            alt=""
            className={
              searchContainer ? "headerImg hideHeaderSingleMenu" : "headerImg "
            }
          />
        </Link>
      </div>
    </div>
  );
}
