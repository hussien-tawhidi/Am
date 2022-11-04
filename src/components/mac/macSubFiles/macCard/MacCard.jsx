import React from 'react'

export default function Card({cardIntroData}) {
  return (
    <div >
      {cardIntroData.map((c ,index) => (
        <div className={`macCard ${c.colorDark}`} key={index}>
          <img src={c.image} alt=""/>
          <div className="texts">
            <p className="new">{c.newText}</p>
            <span className="model">{c.model}</span>
            <h6 className='model'>{c.title}</h6>
            <h6 className='slogan'>{c.slogan}</h6>
            <p className="price">{c.price}</p>
            <div className="buttons">
              <a href="/" className={`buyNow ${c.bgBlue}`}>
                buy
              </a>
              <a href="/" className="more">
                <span>learn more</span>{" "}
                <div className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
