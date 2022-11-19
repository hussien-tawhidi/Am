import React from "react";
import { Link } from "react-router-dom";
import { headerData } from "../../../data/FakeData";
import ShoppingCardMenu from "../../card/ShoppingCardMenu";

export default function HeaderMenu({
  showSearchContainer,
  searchContainer,
  onShowCardItems,
  showCardItems,
}) {
  return (
    <div className="header">
      <Link
        to="/"
        className={searchContainer ? "logo hideHeaderSingleMenu" : "logo"}
      >
        <img src="/assets/logo.png" alt="logo" className="headerImg" />
      </Link>
      <div className="menu">
        {headerData.map((header) => (
          <span
            key={header.id}
            className={
              searchContainer ? "menuLinks hideMenuLinks" : "menuLinks"
            }
          >
            <Link to={header.linkTo}>{header.title}</Link>
          </span>
        ))}
      </div>
      <div className="header-icons">
        <img
          src="/assets/icons/searchIcon.png"
          alt=""
          className={
            searchContainer ? " searchIcon hideHeaderSingleMenu" : " searchIcon"
          }
          onClick={showSearchContainer}
        />
        <div className="headrShoppingCardIcon">
          <img
            src="/assets/icons/shoppingcard.png"
            alt=""
            className={
              searchContainer ? "headerImg hideHeaderSingleMenu" : "headerImg "
            }
            onClick={onShowCardItems}
          />
          <div
            className={
              showCardItems
                ? "shopping-card ShowShopping-card"
                : "shopping-card "
            }
          >
            <ShoppingCardMenu
              onShowCardItems={onShowCardItems}
              showCardItems={showCardItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
