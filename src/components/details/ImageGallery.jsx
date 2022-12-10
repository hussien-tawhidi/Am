import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FreeDelivery from "./utilites/FreeDelivery";

export default function ImageGallery({
  galleryData,
  newText,
  detialTitle,
  price,
  desc1,
  batteryIcon,
  batteryDetials,
  ramImage,
  ramDetails,
  memoryIcons,
  memoryDetials1,
  memoryDetials2,
  memoryDetials3,
  memoryDetials4,
  cameraIcon,
  camerBack,
  camerfront,
}) {
  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(5);

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childElementCount;
    setWidth(width);
  }, []);

  const pluseSide = (n) => {
    setSlideIndex((prev) => prev + n);
    sliderShow(slideIndex + n);
  };

  const sliderShow = (n) => {
    if (n > galleryData.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(galleryData.length);
    }
  };

  const slideRef = useRef();

  const dragStart = (e) => {
    setStart(e.clientX);
  };

  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };

  const dragEnd = (e) => {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  };

  useEffect(() => {
    if (!slideRef.current || !width) return;
    const numbOfThumb = Math.round(slideRef.current.offsetWidth / width);
    console.log(numbOfThumb);
    slideRef.current.scrollLeft =
      slideIndex > numbOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  return (
    <div className='imageGallery'>
      <div className='row'>
        <div className='col-md-6 col-12'>
          <div className='mainImage'>
            {galleryData.map((photo, index) => (
              <>
                <div
                  className='mainImageContainer'
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}>
                  <img src={photo.image} alt='' />
                </div>
              </>
            ))}
            <div className='arrows'>
              <span className='arrow-left arrow' onClick={() => pluseSide(-1)}>
                &#10094;
              </span>
              <span className='arrow-right arrow' onClick={() => pluseSide(1)}>
                &#10095;
              </span>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-12'>
          <div
            className='sliderImage'
            draggable={true}
            ref={slideRef}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}>
            <div className='row'>
              {galleryData.map((photo, index) => (
                <div className='col-4 mb-3'>
                  <div
                    className={
                      index + 1 === slideIndex
                        ? "active singleColor"
                        : "singleColor "
                    }
                    onClick={() => setSlideIndex(index + 1)}>
                    <img src={photo.image} alt='' />
                    <p>{photo.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* detial text start */}
      <p className='newText'>{newText}</p>
      <h5 className='title'>{detialTitle}</h5>
      <div className='detial-content'>
        <div className='content'>
          <p className='price'>${price}</p>
          <div className='moreDesc'>
            <div className='row'>
              <div className='col-md-3 col-6'>
                <div className='desc-icon'>
                  <span className='icon'>{batteryIcon}</span>
                  <span className='icon-desc'>{batteryDetials}</span>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='desc-icon'>
                  <span className='icon'>{cameraIcon}</span>
                  <span className='icon-desc'>{camerfront}</span>
                  <span className='icon-desc'>{camerBack}</span>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='desc-icon'>
                  <img src={ramImage} alt='' className='icon ramgImg' />
                  <span className='icon-desc'>{ramDetails}</span>
                </div>
              </div>
              <div className='col-md-3 col-6'>
                <div className='desc-icon'>
                  <span className='memory icon'>{memoryIcons}</span>
                  <span className='icon-desc'>{memoryDetials1}</span>
                  <span className='icon-desc'>{memoryDetials2}</span>
                  <span className='icon-desc'>{memoryDetials3}</span>
                  <span className='icon-desc'>{memoryDetials4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='seriveces'>
          <span>
            <FreeDelivery />
          </span>
          <p>Free delivery or pick up available items at an Am Store.</p>
        </div>
        <p className='desc'>{desc1}</p>
      </div>
      {/* detial text end */}
    </div>
  );
}
