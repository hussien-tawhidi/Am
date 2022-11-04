import React from "react";
import { macAmacDataOne, macAmacDataTow } from "../../../../data/MacData";
import MacCardTow from "../macPost/MacCardTow";

export default function MacAmac() {
  return (
    <div className="container">
        <div className="row">
      <div className="col-sm-6 col-12">
        {macAmacDataOne.map((mac) => (
          <MacCardTow
            key={mac.title}
            title={mac.title}
            subTitle={mac.subTitle}
            mainImg={mac.mainImg}
            linkBtn={mac.linkBtn}
            link={mac.link}
          />
        ))}
      </div>
      <div className="col-sm-6 col-12">
        {macAmacDataTow.map((mac) => (
          <MacCardTow
            key={mac.title}
            title={mac.title}
            subTitle={mac.subTitle}
            mainImg={mac.mainImg}
            linkBtn={mac.linkBtn}
            link={mac.link}

          />
        ))}
      </div>
    </div>
    </div>
  );
}
