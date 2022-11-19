import { Link } from "react-router-dom";

export default function GalaxyFlipVideo({ samsungBannerData }) {
  return (
    <>
      {samsungBannerData.map((data) => (
        <div
          className={`galaxy-flip-video-banner ${data.flexDirection}`}
          key={data.id}
        >
          <div className="texts">
            <h6>{data.newText}</h6>
            <h1 className={data.textGradeient}>{data.title}</h1>
            <h3 className={data.subTextGradeient}>{data.subTitle}</h3>
            <p>{data.slogan}</p>
            <Link to={data.LinkTo} href="/">
              {data.linkTo}
              <span className="icon">{data.icon}</span>
            </Link>
          </div>
          <img src={data.image} alt="" />
          <video
            src={data.bg}
            autoPlay={true}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            muted={true}
          ></video>
        </div>
      ))}
    </>
  );
}
