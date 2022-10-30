import { headerData } from "../../data/FakeData";

export default function MobielMenu({onMobile,mobiel}) {
  
  return (
    <div className="mobileContainer">
      <div className="mobileMenu ">
        <div className="icon" onClick={onMobile}>
          <span className={mobiel?"line1 close":"line1"}></span>
          <span className={mobiel?"line2 close":"line2"}></span>
        </div>
        <img src="/assets/logo.png" alt="" />
        <img src="/assets/icons/shoppingcard.png" alt="" className={mobiel?"  hide":""}/>
      </div>
      <div className={mobiel ? "menu showMobileMenu" : "menu  "}>
        <div className="mobileSearch">
          <img src="/assets/icons/searchIcon.png" alt="" />
          <input type="text" placeholder="Search in am.com" />
        </div>
        <div className="menuLinks">
          {headerData.map((head) => (
            <>
              <a href="/" className={mobiel?"show":""}>{head.title}</a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
