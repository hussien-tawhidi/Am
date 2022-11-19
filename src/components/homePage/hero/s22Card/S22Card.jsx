import { s22backCamera, s22fronCamera, s22title } from "../../../../data/FakeData";
import BackCamera from "./BackCamera";
import FrontCamera from "./FrontCamera";
import S22title from "./S22title";

export default function S22Card() {
  return (
    <div className="s22-card">
      <S22title cardData={s22title} />
      <div className="bgDark">
        <FrontCamera cardData={s22backCamera} />
        <BackCamera cardData={s22fronCamera}/>
      </div>
    </div>
  );
}
