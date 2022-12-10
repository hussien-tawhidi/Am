import Footer from "../homePage/footer/Footer";
import {
  bannerData,
  endingPara,
  iPhoneSubHeader,
} from "../../data/Accessories";
import Title from "../homePage/header/Title";
import AccessoriesHeader from "./accessoriesSubFile/accessoriesHeader/AccessoriesHeader";
import AccesssoreisProducts from "./accessoriesSubFile/accessoriesProducts/AccesssoreisProducts";
import AccessoriesBanner from "./accessoriesSubFile/accessoriseBanner/AccessoriesBanner";
import Services from "../Services/Service";

export default function Accessories() {
  return (
    <div>
      <Title title="AM | Accessories" />
      <AccessoriesHeader subHeaderMobile={iPhoneSubHeader} />

      <AccessoriesBanner bannerData={bannerData} />
      <div className="accessories-products">
      <AccesssoreisProducts />
      </div>
      <div className="endingPartOfAccessories">
        <Services />
        {endingPara.map((data) => (
          <div className="container" key={data.id}>
            <div className="para pb-3 mb-0">
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer pageName="all accessories"/>
    </div>
  );
}
