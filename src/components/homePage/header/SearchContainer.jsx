import React from "react";
import { searchContaineDate } from "../../../data/FakeData";

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
      <div
        className={
          searchContainer ? "searchInput showSearchInput" : "searchInput"
        }
      >
        <img
          src="/assets/icons/searchIcon.png"
          alt=""
          className={searchContainer ? "inputImage" : ""}
        />
        <input
          type="text"
          placeholder="Search in am.com"
          className={searchContainer ? "showInput" : ""}
        />
        <span
          className={searchContainer ? "close showCloseBtn" : "close"}
          onClick={showSearchContainer}
        >
          x
        </span>
      </div>
      <div className="QuickLinkConainer">
        <p
          className={searchContainer ? "title showTitle" : "title"}
          onClick={searchContainer}
        >
          QuickLinks
        </p>
        <div className="quickLinks">
          {searchContaineDate.map((search) => (
            <div key={search.id}>
              <p
                className={searchContainer?"link showQuikLinks":"link"}
              >
                {search.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
