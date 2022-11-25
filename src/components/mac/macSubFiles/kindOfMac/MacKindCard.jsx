import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCard } from "../../../../store/cardSlice";

export default function MacKindCard({
  image,
  color1,
  color2,
  color3,
  newText,
  chipMode,
  price,
  bgBlue,
  displayInch,
  displayModel,
  miLogo,
  miLogo1,
  miName,
  core8,
  cpu,
  core7,
  gpu,
  ramImage,
  rameSize,
  storage,
  storageMax,
  batteryImage,
  batterySize,
  cameraImage,
  cameraSize,
  soundImage,
  sound,
  wightDetails,
  wightTitle,
  fingerPrint,
  fingerPrintImage,
  iphoneClassBg,
  inHightClass,
  sosHightClass,
  cameraHightClass,
  title,
  id,
}) {
  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="mac-kind-card">
      <div className={`mainContainer ${iphoneClassBg}`}>
        <div className="mainImage">
          <img src={image} alt="" className="mainImage" />
        </div>
        <div className="color">
          <img src={color1} alt="" />
          <img src={color2} alt="" />
          <img src={color3} alt="" />
        </div>
        <div>
          <p className="newText">{newText}</p>

          <h6 className="name">{title}</h6>

          <p className="chipName">{chipMode}</p>

          <p className="price">{price}</p>

          <div className="buttons">
            <div className={`buyNow ${bgBlue}`} onClick={onAddToCard}>
              buy
            </div>
            <Link to={`/products/${id}`} className="more">
              <span>learn more</span>{" "}
              <div className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="details">
        <div className={`singlePart ${inHightClass}`}>
          <p className="subTitle">{displayInch}</p>
          <p className="text">{displayModel}</p>
        </div>
        <div className={`singlePart ${sosHightClass}`}>
          <div className="mLogo">
            <img src={miLogo} alt="" className="singleImg" />
            <img src={miLogo1} alt="" className="singleImg" />
          </div>
          <p className="text">{miName}</p>
        </div>
        <div className="singlePart">
          <p className="subTitle">{core8}</p>
          <p className="text">{cpu}</p>
        </div>
        <div className="singlePart">
          <p className="subTitle">{core7}</p>
          <p className="text">{gpu}</p>
        </div>
        <div className="singlePart">
          <img src={ramImage} alt="" className="singleImg" />
          <p className="text">{rameSize}</p>
        </div>
        <div className="singlePart">
          <p className="subTitle">{storage}</p>
          <p className="text">{storageMax}</p>
        </div>
        <div className="singlePart">
          <img src={batteryImage} alt="" className="singleImg" />
          <p className="text">{batterySize}</p>
        </div>
        <div className={`singlePart ${cameraHightClass}`}>
          <img src={cameraImage} alt="" className="singleImg" />
          <p className="text">{cameraSize}</p>
        </div>
        <div className="singlePart">
          <img src={soundImage} alt="" className="singleImg" />
          <p className="text">{sound}</p>
        </div>
        <div className="singlePart">
          <p className="subTitle">{wightTitle}</p>
          <p className="text">{wightDetails}</p>
        </div>
        <div className="singlePart">
          <img src={fingerPrintImage} alt="" className="singleImg" />
          <p className="text">{fingerPrint}</p>
        </div>
      </div>
    </div>
  );
}
