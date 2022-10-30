
export default function HeroProductsCard({
  title,
  logo,
  slogan,
  model,
  heroImg,
}) {
  return (
    <div className="heroCard">
      <div className="text">
        <div className="title">
          <img src={logo} alt="" className="logo" />
          <h5>{title}</h5>
        </div>
        <p>{slogan}</p>
        <p>{model}</p>
        <div className="links">
          <a href="/" className="buyNow">
            buy
          </a>
          <a href="/" className="more">
            <span>learn more</span>{" "}
            <div className="icon">
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </a>
        </div>
      </div>
      <img src={heroImg} alt="" className="heroImg" />
    </div>
  );
}
