import { Link } from "react-router-dom";
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
    </>
  );
}
