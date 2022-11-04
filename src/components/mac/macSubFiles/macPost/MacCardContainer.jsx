import React from "react";
import { macPostOne, macPostTow } from "../../../../data/MacData";
import MacCardTow from "./MacCardTow";

export default function MacCardContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          {macPostOne.map((post) => (
            <MacCardTow
              key={post.title}
              subTitle={post.subTitle}
              title={post.title}
              text={post.text}
              linkBtn={post.linkBtn}
              mainImg={post.mainImg}
              buy={post.buy}
              lightColor={post.lightColor}
              
            />
          ))}
        </div>
        <div className="col-md-6 col-12">
          {macPostTow.map((post) => (
            <MacCardTow
              key={post.title}
              subTitle={post.subTitle}
              title={post.title}
              text={post.text}
              linkBtn={post.linkBtn}
              mainImg={post.mainImg}
              link={post.link}
              lightColor={post.lightColor}
              iphoneDarkBg={post.iphoneDarkBg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
