import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import SearchContainer from "./SearchContainer";
export default function Header() {
  const [searchContainer, setSearchContainer] = useState(false);

  const showSearchContainer = () => {
    setSearchContainer(!searchContainer);
  };
  return (
    <div className="headerContainer">
      {/* searchContainer */}
      <SearchContainer
        searchContainer={searchContainer}
        showSearchContainer={showSearchContainer}
      />
      <HeaderMenu showSearchContainer={showSearchContainer} />
    </div>
  );
}
