import React from "react";

export default function SubHeaderDescktop({ subHeaderDescktop }) {
  return (
    <div className="subHeader">
      {subHeaderDescktop.map((head) => (
        <div key={head.id} className="singleSubHeader">
          <img src={head.image} alt="" className="subHeaderImg" />
          <div className="text">
            <p>{head.title}</p>
            <span>{head.newText}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
