import { Link } from "react-router-dom";
import {
  cardIntro3Data,
  iphoneAccessoriesData,
} from "../../../../data/MobileData";
import IphoneCard from "../iphoneCardInto/IphoneCard";
import AccessoriesCard from "./AccessoriesCard";

export default function IPhoneAccessories() {
  return (
    <div className="container">
      <h1 className="iphone-accessoriesTitle">Featured accessories</h1>
      {iphoneAccessoriesData.map((data) => (
        <AccessoriesCard
          key={data.id}
          id={data.id}
          accessories1={data.accessories1}
          image={data.image}
          title={data.title}
          text={data.text}
          buyNow={data.buyNow}
          linkTo={data.linkTo}
          price={data.price}
        />
      ))}
      {cardIntro3Data.map((data) => (
        <IphoneCard
          key={data.id}
          id={data.id}
          bg={data.bg}
          textGradeint={data.textGradeint}
          card3TextClass={data.card3TextClass}
          title={data.title}
          price={data.price}
          image={data.image}
        />
      ))}

      <Link to="/accessories" className="link my-3">
        shop all iphone accessories{" "}
        <span className="icon">
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </Link>
    </div>
  );
}
