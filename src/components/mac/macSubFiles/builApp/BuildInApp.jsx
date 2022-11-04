
import BuidAppIcons from "./BuidAppIcons";

export default function BuildInApp({buildApp,builAppData,title,desc}) {
  return (
    <div className="build-app-container">
        <div className="container">
        <h3 className="title">{title}</h3>
        <p className="desc">
          {desc}
        </p>
        <BuidAppIcons buildApp={buildApp} builAppDataApp={builAppData}/>
      </div>
    </div>
  );
}
