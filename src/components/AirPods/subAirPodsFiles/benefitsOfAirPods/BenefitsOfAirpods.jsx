import {
  cardBenfit1,
  cardBenfit2,
  cardBenfit3,
  cardBenfit4,
  cardBenfit5,
} from "../../../../data/AirPods";
import BenefitsCard from "./BenefitsCard";

export default function BenefitsOfAirpods() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="lgImages">
            <BenefitsCard cardData={cardBenfit1} />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="smImages">
                <BenefitsCard cardData={cardBenfit2} />
              </div>
            </div>
            <div className="col-sm-6 col-12">
            <div className="smImages">
                <BenefitsCard cardData={cardBenfit3} />
              </div>
            </div>
            <div className="col-sm-6 col-12">
            <div className="smImages">
                <BenefitsCard cardData={cardBenfit4} />
              </div>
            </div>
            <div className="col-sm-6 col-12">
            <div className="smImages">
                <BenefitsCard cardData={cardBenfit5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
