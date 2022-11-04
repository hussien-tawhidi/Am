import { servicesOfAllProdcuts } from "../../data/ServicesData";
import ServicesCard from "./ServicesCard";

// this component for services and benefcial company in all products
export default function MacService() {
  return (
    <div className="container">
      <div className="row">
        {servicesOfAllProdcuts.map((service) => (
          <div className="col-sm-4 col-12"  key={service.id}>
            <ServicesCard
             
              icon={service.icon}
              title={service.title}
              text={service.text}
              link={service.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
