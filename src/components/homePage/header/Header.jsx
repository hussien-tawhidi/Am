import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import MobielMenu from "./MobielMenu";
import SearchContainer from "./SearchContainer";
export default function Header() {
  const [searchContainer, setSearchContainer] = useState(false);
  const [showCardItems, setShowCardItems] = useState(false);
  const [mobiel, setMobile] = useState(false);
  const onMobile = () => {
    setMobile(!mobiel);
  };
  const showSearchContainer = () => {
    setSearchContainer(!searchContainer);
  };

  const onShowCardItems = () => {
    setShowCardItems(!showCardItems);
  };
  return (
    <div className="headerContainer">
      <div className="headerMenus">
        <SearchContainer
          searchContainer={searchContainer}
          showSearchContainer={showSearchContainer}
        />
        <HeaderMenu
          showSearchContainer={showSearchContainer}
          searchContainer={searchContainer}
          onShowCardItems={onShowCardItems}
          showCardItems={showCardItems}
        />
        <MobielMenu
          mobiel={mobiel}
          onMobile={onMobile}
          showCardItems={showCardItems}
          onShowCardItems={onShowCardItems}
        />
      </div>
      <div
        className={
          searchContainer || showCardItems ? "overlay showOverlay" : "overlay"
        }
        // onClick={showSearchContainer}
      ></div>
    </div>
  );
}
