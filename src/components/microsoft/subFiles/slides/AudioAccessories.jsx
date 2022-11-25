import { Link } from "react-router-dom";

export default function AudioAccessories({
  audioSlideData,
  numberOfproduct,
  title,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="microsoftLgTitle audio-title">
          <h2>{title}</h2>
          <div className="text">
            <p>{numberOfproduct}</p>
            <Link to="/accessories">See All</Link>
          </div>
        </div>
        {audioSlideData.map((audio) => (
          <div className="col-lg-3 col-md-6 col-12" key={audio.id}>
            <div className="single-audio">
              <img src={audio.image} alt="" />
              <div className="texts">
                <h4>{audio.title}</h4>
                <p className="price">{audio.price}</p>
                <p className="desc">{audio.text}</p>
              </div>
              <Link to={`/products/${audio.id}`}>learn more ...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
