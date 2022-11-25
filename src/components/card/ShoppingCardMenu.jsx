import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCardItems,
  selectTotalAmount,
  setGetTotals,
} from "../../store/cardSlice";
import CardItems from "./CardItems";
export default function ShoppingCardMenu({ onShowCardItems, showCardItems }) {
  const cartItems = useSelector(selectCardItems);
  const totalAmount = useSelector(selectTotalAmount);
  // const totalQauntity = useSelector(selectTotalQTY);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

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
      >
        checkout your card
      </Link>
      <div>
        {cartItems.length === 0 ? (
          <h6 className="text-center mt-5">No item added to the cart</h6>
        ) : (
          cartItems.map((item, index) => (
            <CardItems
            
              showCardItems={showCardItems}
              title={item.title}
              image={item.image}
              price={Math.floor(item.price)}
              cardQauntity={item.cardQauntity}
              key={index}
              id={item.id}
            />
          ))
        )}
      </div>
      <div className="totalAmount">
        <p
          className={
            showCardItems ? "total-amount-title show" : "total-amount-title"
          }
        >
          total amount
        </p>
        <span className={showCardItems ? "total-amount show" : "total-amount"}>
          ${parseFloat(totalAmount.toFixed(2))}
        </span>
      </div>
      <div className="links">
        <Link
          to="/log-in"
          className={showCardItems ? "login showLogin" : "login"}
          onClick={onShowCardItems}
        >
          Log in
        </Link>
        <Link
          to="/log-out"
          className={showCardItems ? "logout showLogout" : "logout"}
          onClick={onShowCardItems}
        >
          log out
        </Link>
      </div>
    </div>
  );
}
