import React from "react";
import MacKindCard from "../MacKindCard";

export default function NoteBook({ noteBookeDetailsData }) {
  return (
    <div className="row">
      {noteBookeDetailsData
        .filter((item) => item.cataegory === "noteBook")
        .map((filterItem) => (
          <div className="col-md-3 col-6"  key={filterItem.id}>
            <MacKindCard
              image={filterItem.image}
              color1={filterItem.color1}
              color2={filterItem.color2}
              color3={filterItem.color3}
              newText={filterItem.newText}
              productName={filterItem.name}
              chipMode={filterItem.chip}
              price={filterItem.price}
              bgBlue={filterItem.bgBlue}
              displayInch={filterItem.displayInch}
              displayModel={filterItem.displayModel}
              miLogo={filterItem.miLogo}
              miLogo1={filterItem.miLogo1}
              miName={filterItem.miName}
              core8={filterItem.core8}
              cpu={filterItem.cpu}
              core7={filterItem.core7}
              gpu={filterItem.gpu}
              ramImage={filterItem.ramImage}
              rameSize={filterItem.rameSize}
              storage={filterItem.storage}
              storageMax={filterItem.storageMax}
              batteryImage={filterItem.batteryImage}
              batterySize={filterItem.batterySize}
              cameraImage={filterItem.cameraImage}
              cameraSize={filterItem.cameraSize}
              soundImage={filterItem.soundImage}
              sound={filterItem.sound}
              wightDetails={filterItem.wightDetails}
              wightTitle={filterItem.wightTitle}
              fingerPrint={filterItem.fingerPrint}
              fingerPrintImage={filterItem.fingerPrintImage}
              linkTo={filterItem.linkTo}
            />
          </div>
        ))}
    </div>
  );
}
