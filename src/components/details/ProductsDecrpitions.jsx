import React from "react";

export default function ProductsDecrpitions({
  partOneImage,
  partOneTitle,
  partOneLogo,
  partOneText,
  videoBg,
  videoTitle1,
  videoTitle2,
  videoTitle3,
  photos1,
  photos2,
  photos3,
  imageBg
}) {
  return (
    <div className="details-container">
      <div className="second-part">
        <div className="videoConainer">
          <div className="texts">
            <h3 className="title">{videoTitle1}</h3>
            <h3 className="title">{videoTitle2}</h3>
            <h3 className="title">{videoTitle3}</h3>
          </div>
          <img src={imageBg} alt="" />
          <video
            src={videoBg}
            autoPlay={true}
            loop={true}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            muted={true}
          ></video>
        </div>
      </div>
      <div className="first-part">
        <img src={partOneImage} alt="" className="part-one-img" />
        <div className="container-texts">
          <div className="title-row">
            <img src={partOneLogo} alt="" className="partOneLogo" />
            <h4 className="title">{partOneTitle}</h4>
          </div>
          <p className="desc">{partOneText}</p>
        </div>
      </div>

      <div className="part-three">
        <div className="photos">
          <div className="row">
            <div className="col-8">
              <div className="heroImg">
                <img src={photos1} alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-4">
              <div className="subImg">
                <img src={photos2} alt="" className="img-fluid"/>
                <img src={photos3} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
