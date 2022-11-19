import { Link } from "react-router-dom";
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
        <div>
          {searchContaineDate.map((search) => (
            <div
              key={search.id}
              className={
                searchContainer ? "quickLinks showquickLinks" : "quickLinks"
              }
            >
              <Link to="/" className="headeLinks" onClick={showSearchContainer}>
                {search.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
