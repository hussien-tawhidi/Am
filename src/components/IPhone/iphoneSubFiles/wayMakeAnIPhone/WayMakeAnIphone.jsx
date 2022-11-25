import {
  cardIntro4Data,
  iphonePostOne,
  iphonePostTow,
} from "../../../../data/MobileData";
import MacCardTow from "../../../mac/macSubFiles/macPost/MacCardTow";
import IphoneCard from "../iphoneCardInto/IphoneCard";

export default function WayMakeAnIphone() {
  return (
    <div>
      <h1 className="iphoneLGTitle">What makes an iPhone an iPhone?</h1>
      <div className="container">
        {cardIntro4Data.map((data) => (
          <IphoneCard key={data
          .id} id={data.id} bg={data.bg} textGradeint={data.textGradeint} title={data.title} price={data.price} image={data.image}/>
        ))}

        <div className="row">
          <div className="col-sm-6 col-12">
            {iphonePostOne.map((post) => (
              <MacCardTow
                key={post.title}
                subTitle={post.subTitle}
                title={post.title}
                text={post.text}
                linkBtn={post.linkBtn}
                mainImg={post.mainImg}
                buy={post.buy}
                iphonePost={post.iphonePost}
              />
            ))}
          </div>
          <div className="col-sm-6 col-12">
            {iphonePostTow.map((post) => (
              <MacCardTow
                lightColor={post.lightColor}
                key={post.title}
                subTitle={post.subTitle}
                title={post.title}
                text={post.text}
                linkBtn={post.linkBtn}
                mainImg={post.mainImg}
                buy={post.buy}
                iphonePost={post.iphonePost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
