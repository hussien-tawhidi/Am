import { useState } from "react";
import { noteBookeDetailsData } from "../../../../data/MacData";
import Descktop from "./descktop/Descktop";
import NoteBook from "./noteBook/NoteBook";

export default function KindOfMac() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [show, setShow] = useState(true);
  const onShow = () => {
    setShow(!show);
    setActiveBtn(!activeBtn);
  };

  return (
    <div className="kindOfMacContainer">
      <div className="container">
        <h2 className="title">Which Mac is right for you?</h2>
        <div className="subtitle">
          <button
            className={show ? "customeBtn activeBtn" : "customeBtn"}
            onClick={onShow}
          >
            notebook
          </button>
          <button
            className={activeBtn ? "customeBtn activeBtn" : "customeBtn"}
            onClick={onShow}
          >
            desktop
          </button>
        </div>
        <div className={show ? "" : "hide"}>
          <NoteBook noteBookeDetailsData={noteBookeDetailsData} />
        </div>
        <div className={show ? "hideDesctops" : ""}>
          <Descktop noteBookeDetailsData={noteBookeDetailsData} />
        </div>

        <div className="Links">
          <a href="/">Compare all Mac models</a>
          <a href="/">Shop Mac</a>
        </div>
      </div>
    </div>
  );
}
