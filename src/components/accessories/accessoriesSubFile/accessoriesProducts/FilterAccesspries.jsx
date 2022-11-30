import { Link } from "react-router-dom";
import { accessoriesProducts } from "../../../../data/Accessories";

export default function FilterAccesspries({ fiterCategory, title }) {
  return (
    <div className="row ">
      <h6 className="filterAccessoriesTitle">{title}</h6>
      {accessoriesProducts
        .filter((item) => item.category === fiterCategory)
        .map((item) => (
          <div className="col-lg-3 col-sm-6 col-12">
            <Link
              to={`/products/${item.id}`}
              className="singleAccessorriesProducts"
            >
              <img src={item.image} alt="" className="heroImage" />
              <div className="colors">
                <img src={item.color1} alt="" />
                <img src={item.color2} alt="" />
                <img src={item.color3} alt="" />
              </div>
              <div className="texts">
                <span>{item.newText}</span>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>
            </Link>
          </div>
        ))}

      <a href="/" className="more">
        See All
      </a>
    </div>
  );
}
