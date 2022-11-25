import { useDispatch } from "react-redux";
import {
  setRemoveItemFromCard,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from "../../store/cardSlice";
export default function CardItems({
  showCardItems,
  id,
  title,
  image,
  price,
  cardQauntity,
}) {
  const dispatch = useDispatch();

  const onRemoveItems = () => {
    dispatch(
      setRemoveItemFromCard({
        id,
        title,
        image,
        price,
        cardQauntity,
      })
    );
  };

  const onsetIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        image,
        price,
        cardQauntity,
      })
    );
  };
  const onsetDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        image,
        price,
        cardQauntity,
      })
    );
  };   
  return (
    <>
      <div className="cartItems">
        <div className="products">
          <div className="products-content">
            <img
              src={image}
              alt=""
              className={showCardItems ? "" : "hideProduct"}
            />
            <div className="products-texts">
              <p className={showCardItems ? "name showName" : "name"}>
                {title}
              </p>
              <p className={showCardItems ? "price showPrice" : "price"}>
                ${price}
              </p>
            </div>
            <div className="numbers">
              <span
                className={showCardItems ? "decrease showDecrease" : "decrease"}
                onClick={onsetDecreaseItemQTY}
              >
                -
              </span>
              <span className={showCardItems ? "count showCount" : "count"}>
                {cardQauntity}
              </span>
              <span
                className={showCardItems ? "increase showIncrease" : "increase"}
                onClick={onsetIncreaseItemQTY}
              >
                +
              </span>
            </div>
            <div className={showCardItems ? "totalPrice show" : "totalPrice"}>
              <span>${price * cardQauntity}</span>
            </div>
          </div>
          <div
            className={showCardItems ? "delete showDelete" : "delete"}
            onClick={onRemoveItems}
          >
            <span>Delete</span>
          </div>
        </div>
      </div>
    </>
  );
}
