import { Link } from "react-router-dom";
export default function ShoppingCardMenu({ onShowCardItems, showCardItems }) {
  return (
    <div className="shoppingCard">
      <div className="profile">
        <img
          src="/assets/card/avatar.jpg"
          alt=""
          className={showCardItems ? "" : "hideAvatarImage"}
        />
        <p className={showCardItems ? "name" : "name hideShow"}>Your name</p>
      </div>
      <Link
        to="/card"
        className={showCardItems ? "checkout showCheckout" : "checkout"}
        onClick={onShowCardItems}
      >
        checkout your card
      </Link>
      <div className="products">
        <div className="products-content">
          <img
            src="assets/store/a-2g.jpg"
            alt=""
            className={showCardItems ? "" : "hideProduct"}
          />
          <div className="products-texts">
            <p className={showCardItems ? "name showName" : "name"}>
              Products name
            </p>
            <p className={showCardItems ? "price showPrice" : "price"}>
              $99.99
            </p>
          </div>
          <div className="numbers">
            <span
              className={showCardItems ? "decrease showDecrease" : "decrease"}
            >
              -
            </span>
            <span className={showCardItems ? "count showCount" : "count"}>
              0
            </span>
            <span className={showCardItems ? "increase showIncrease" : "increase"}>+</span>
          </div>
        </div>
        <div className={showCardItems?"delete showDelete":"delete"}>
          <span>Delete</span>
        </div>
      </div>
      <div className="links">
        <Link to="/log-in" className={showCardItems?"login showLogin":"login"} onClick={onShowCardItems}>
          Log in
        </Link>
        <Link to="/log-out" className={showCardItems?"logout showLogout":"logout"} onClick={onShowCardItems}>
          log out
        </Link>
      </div>
    </div>
  );
}
