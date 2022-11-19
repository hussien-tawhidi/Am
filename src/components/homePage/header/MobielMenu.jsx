import { headerData } from "../../../data/FakeData";
import { Link } from "react-router-dom";
import ShoppingCardMenu from "../../card/ShoppingCardMenu";
export default function MobielMenu({
  onMobile,
  mobiel,
  showCardItems,
  onShowCardItems,
}) {
  return (
    <div className="mobileContainer">
      <div className="mobileMenu ">
        <div className="icon" onClick={onMobile}>
          <span className={mobiel ? "line1 close" : "line1"}></span>
          <span className={mobiel ? "line2 close" : "line2"}></span>
        </div>
        <img src="/assets/logo.png" alt="" />
        <div className="shoppingcard">
          <img
            src="/assets/icons/shoppingcard.png"
            alt=""
            className={mobiel ? "  hide" : ""}
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
      <div className={mobiel ? "menu showMobileMenu" : "menu  "}>
        <div className="mobileSearch">
          <img src="/assets/icons/searchIcon.png" alt="" />
          <input type="text" placeholder="Search in am.com" />
        </div>
        <div className="menuLinks">
          {headerData.map((head) => (
            <span key={head.id} className={mobiel ? "show" : ""}>
              <Link to={head.linkTo} onClick={onMobile}>
                {head.title}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
