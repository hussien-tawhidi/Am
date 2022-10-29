import React from "react";
import { searchContaineDate } from "../../data/FakeData";

export default function SearchContainer({
  searchContainer,
  showSearchContainer,
}) {
  return (
    <div
      className={
        searchContainer
          ? "searchContainer showSearchContainer"
          : "searchContainer"
      }
    >
      <div className="searchInput">
        <img src="/assets/icons/searchIcon.png" alt="" />
        <input type="text" placeholder="search in am.com" />
        <span className="close" onClick={showSearchContainer}>
          x
        </span>
      </div>
      <div className="QuickLinkConainer">
        <p className="title" onClick={searchContainer}>
          QuickLinks
        </p>
        <div className="quickLinks">
          {searchContaineDate.map((search) => (
            <>
              <a href={search.linkTo} key={search.id}>
                {search.title}
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
