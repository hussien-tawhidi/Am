import { huaweiCardPhone } from "../../../../data/Huawei";
import HuaweiPhoneCard from "./HuaweiPhoneCard";

export default function HuaweiPhones() {
  return (
    <div className="container">
      <h1 className="huawieTitle">Some of hot mobile products</h1>
      <div className="row">
        {huaweiCardPhone.map((data) => (
          <div className="col-md-4 col-sm-6 col-12">
            <HuaweiPhoneCard
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              text={data.text}
              newText={data.newText}
              size={data.size}
              direction={data.direction}
              learnMore={data.learnMore}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
