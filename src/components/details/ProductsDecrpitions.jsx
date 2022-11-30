import FreeDelivery from "./utilites/FreeDelivery";

export default function ProductsDecrpitions() {
  return (
    <div className="productDescriptions">
      <p className="newText">new</p>
      <h6 className="title">title here</h6>
      <h3 className="model">model of the products</h3>
      <div className="battery">
        <span className="batteryIcon">
          <i class="fa-solid fa-battery-three-quarters"></i>
        </span>
        <p className="desc">about 20 hour</p>
      </div>
      <p className="price">$99999</p>
      <div className="seriveces">
        <FreeDelivery />
        <p>Free delivery or pick up available items at an Am Store.</p>
      </div>
      <p className="mainText">
        Requires AirPods Max with the latest version of software, and iPhone and
        iPod touch models with the latest version of iOS; iPad models with the
        latest version of iPadOS; Apple Watch models with the latest version of
        watchOS; Mac models with the latest version of macOS; or Apple TV models
        with the latest version of tvOS.
      </p>
    </div>
  );
}
