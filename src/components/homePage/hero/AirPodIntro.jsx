
export default function AirPodIntro() {
  return (
    <div className="airPod">
      <img src="/assets/homeImages/aBg.png" alt="" className="imageText" />
      <img src="/assets/homeImages/a.png" alt="" className="imageAirPod" />
      <p className="price">203$</p>
      <div className="texts">
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
  );
}
