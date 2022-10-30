import FooterCard from "./ShopAndLearn";
import FooterCopyRight from "./FooterCopyRight";
import Paragraph from "./Paragraph";
import Services from "./Services";
import FooterAccount from "./FooterAcount";
import AppleStore from "./AppleStore";
import Business from "./Business";
import Education from "./Educations";
import HealthCare from "./HealthCare";
import AppleValues from "./AppleValues";
import AboutUs from "./AboutUs";

export default function Footer() {
  // const [footerMenu, setFooterMenu] = useState(false);

  // const onFooterMenu = () => {
  //   setFooterMenu(!footerMenu);
  // };
  return (
    <div className="container">
      <div className="footerContainer">
        <Paragraph />
        <div className="row">
          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <FooterCard />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <Services />
            </div>
            <div className="single-footer-menu">
              <FooterAccount />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <AppleStore />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <Business />
            </div>
            <div className="single-footer-menu">
              <Education />
            </div>
            <div className="single-footer-menu">
              <HealthCare />
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <AppleValues />
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 col-12">
            <div className="single-footer-menu">
              <AboutUs />
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <FooterCopyRight />
      </div>
    </div>
  );
}
