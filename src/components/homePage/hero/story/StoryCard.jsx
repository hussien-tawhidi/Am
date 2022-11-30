import { Link } from "react-router-dom";

export default function StoryCard({ id, image, title, text, time }) {
  return (
    <div className="storyCard">
      <img src={image} alt="" className="heroImage" />
      <div className="icons">
        <div className="singleIcon">
          <span className="icon love">
            <i class="fa-solid fa-heart"></i>
          </span>
          <span className="count">1</span>
        </div>
        <div className="singleIcon">
          <span className="icon">
            <i class="fa-regular fa-clock"></i>
          </span>
          <span className="count">{time}</span>
        </div>
        <div className="singleIcon">
          <span className="icon">
            <i class="fa-solid fa-hashtag"></i>
          </span>
          <span className="count">1</span>
        </div>
      </div>
      <div className="texts">
        <h6 className="title">{title}</h6>
        <p className="desc">{text}</p>
      </div>
      <Link to={`/products/${id}`} className="link">
        <span>more ...</span>
      </Link>
    </div>
  );
}
