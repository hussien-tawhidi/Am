import { Link } from "react-router-dom";

export default function SubHeaderDescktop({ subHeaderDescktop }) {
  return (
    <div className="subHeader">
      {subHeaderDescktop.map((head) => (
        <Link to={`/products/${head.LinkTo}`} key={head.id} className="singleSubHeader">
          <img src={head.image} alt="" className="subHeaderImg" />
          <div className="text">
            <p>{head.title}</p>
            <span>{head.newText}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
