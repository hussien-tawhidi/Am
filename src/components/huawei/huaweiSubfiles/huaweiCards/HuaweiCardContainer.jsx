import { huaweiCardOne } from "../../../../data/Huawei";
import HuaweiCardOne from "./HuaweiCardOne";

export default function HuaweiCardContainer() {
  return (
    <div>
      {huaweiCardOne.map((data) => (
        <HuaweiCardOne
          key={data.id}
          id={data.id}
          title={data.title}
          image={data.image}
          price={data.price}
          text={data.text}
          newText={data.newText}
          learnMore={data.learnMore}
          direction={data.direction}
        />
      ))}
    </div>
  );
}
