import { Link } from "react-router-dom";
import { heroAirpod } from "../../../../data/FakeData";
import AirpodHero from "./AirpodHero";
export default function AppleEventCard({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="appleCardEvenet" key={data.id}>
          <div className="texts">
            <h6>{data.title}</h6>
            <p>{data.desc}</p>
            <Link to="/" className="link">
              <span className="text-link">{data.linkText}</span>
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </Link>
          </div>
          <img src={data.image} alt="" className="heroImages" />
        </div>
      ))}

      {heroAirpod.map((data) => (
        <AirpodHero
          id={data.id}
          appleIcon={data.appleIcon}
          title={data.title}
          desc={data.desc}
          iconsTitle={data.iconsTitle}
          iconsDesc={data.iconsDesc}
          call={data.call}
          music={data.music}
          mic={data.mic}
          image={data.image}
          price={data.price}
        />
      ))}
    </>
  );
}
