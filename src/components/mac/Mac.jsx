import {
  builAppData,
  buildApp,
  cardIntroData,
  cardIntroData1,
  macBanner2,
  macBanner3,
  macEndingParaData,
  proAppData,
  proAppIcons,
} from "../../data/MacData";
import GetDiallyOff from "../GetDiallyOff";
import MacService from "../Services/Service";
import BuildInApp from "./macSubFiles/builApp/BuildInApp";
import KindOfMac from "./macSubFiles/kindOfMac/KindOfMac";
import MacAmac from "./macSubFiles/mac-a-mac/MacAmac";
import MacBanner2 from "./macSubFiles/macBanner/MacBanner2";
import MacBannerContainer from "./macSubFiles/macBanner/MacBannerContainer";
import MacCard from "./macSubFiles/macCard/MacCard";
import MacHeader from "./macSubFiles/macHeader/MacHeader";
import MacCardContainer from "./macSubFiles/macPost/MacCardContainer";
import Title from "../homePage/header/Title"
export default function Mac() {
  return (
    <div>
      <Title title="AM - Mac"/>
      <MacHeader />
      <GetDiallyOff />
      <MacCard cardIntroData={cardIntroData1} />
      <MacCard cardIntroData={cardIntroData} />
      <KindOfMac />
      <MacBannerContainer />
      <MacCardContainer />
      <MacService />
      <MacAmac />

      <BuildInApp
        title="Built-in Apps"
        desc="Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect, and work more efficiently."
        buildApp={buildApp}
        builAppData={builAppData}
      />
      <BuildInApp
        title="Pro Apps"
        desc="For professionals ready to push their creativity, these industry-leading apps offer maximum control over editing, processing, and output of music and film."
        buildApp={proAppIcons}
        builAppData={proAppData}
      />
      <MacBanner2 bannerThree={macBanner2} />
      <MacBanner2 bannerThree={macBanner3} />
      {macEndingParaData.map((para) => (
        <div className="container" key={para.id} >
          <div className="para">
          <p>{para.desc}</p>
        </div>
        </div>
      ))}
    </div>
  );
}
