import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import MobielMenu from "./MobielMenu";
import SearchContainer from "./SearchContainer";
export default function Header() {
  const [searchContainer, setSearchContainer] = useState(false);
  const [mobiel, setMobile] = useState(false);
  const onMobile = () => {
    setMobile(!mobiel);
  };
  const showSearchContainer = () => {
    setSearchContainer(!searchContainer);
  };
  return (
    <div className="headerContainer">
      <SearchContainer
        searchContainer={searchContainer}
        showSearchContainer={showSearchContainer}
      />
      <HeaderMenu
        showSearchContainer={showSearchContainer}
        searchContainer={searchContainer}
      />
      <MobielMenu mobiel={mobiel} onMobile={onMobile} />
      <div
        className={searchContainer ? "overlay showOverlay" : "overlay"}
        onClick={showSearchContainer}
      ></div>
    </div>
  );
}
