import { iphoneDetails } from "../../../../data/MobileData";
import MacKindCard from "../../../mac/macSubFiles/kindOfMac/MacKindCard";

export default function IphoneDeatials() {
  return (
    <div className="iphone-details">
      <h1 className="iphoneLGTitle">Which iPhone is right for you?</h1>
      <div className="row">
        {iphoneDetails.map((iphone) => (
          <div className="col-md-3 col-6">
            <MacKindCard
              key={iphone.id}
              image={iphone.image}
              color1={iphone.color1}
              color2={iphone.color2}
              color3={iphone.color3}
              newText={iphone.newText}
              productName={iphone.name}
              price={iphone.price}
              chipMode={iphone.slogan}
              displayInch={iphone.displayInch}
              displayModel={iphone.displayModel}
              miLogo={iphone.sosLogo}
              miName={iphone.sosDetails}
              batteryImage={iphone.batteryImage}
              batterySize={iphone.batterySize}
              cameraImage={iphone.cameraImage}
              cameraSize={iphone.cameraSize}
              soundImage={iphone.bionicChip}
              sound={iphone.bionicDetails}
              ramImage={iphone.cellularImage}
              rameSize={iphone.cellular}
              fingerPrintImage={iphone.faceIdImage}
              fingerPrint={iphone.faceId}
              bgBlue={iphone.bgBlue}
              inHightClass={iphone.inHightClass}
              iphoneClassBg={iphone.iphoneClassBg}
              sosHightClass={iphone.sosHightClass}
              cameraHightClass={iphone.cameraHightClass}
              linkTo={iphone.linkTo}
            />
          </div>
        ))}
      </div>

      <div className="Links">
        <a href="/">Compare all Mac models</a>
        <a href="/">Shop Mac</a>
      </div>
    </div>
  );
}
