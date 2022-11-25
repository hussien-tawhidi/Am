import React, { useState } from "react";
import {
  filterSamsungMobiel,
  filterSamsungMobielTitle,
} from "../../../../data/SamsungPhoneData";
import MobileCategoryCard from "./MobileCategoryCard";
import SamsungCatTitle from "./SamsungCatTitle";

export default function MobileCategory() {
  const [dataFile, setDataFile] = useState(filterSamsungMobiel);

  const filterData = (item) => {
    const result = filterSamsungMobiel.filter((itemResult) => {
      return itemResult.category === item;
    });
    setDataFile(result);
  };

  
  return (
    <div className="samsungMobileCate">
      <div className="row">
        <div className="col-md-3">
          <div className="category">
            <SamsungCatTitle
              categoryTitles={filterSamsungMobielTitle}
              filterData={filterData}
              setDataFile={setDataFile}
              filterSamsungMobiel={filterSamsungMobiel}
            />
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="customeCard">
            <div className="row">
              {dataFile.map((data) => (
                <div className="col-sm-4 col-12 mb-4">
                  <MobileCategoryCard
                    key={data.id}
                    id={data.id}
                    newText={data.newText}
                    compare={data.compare}
                    color1={data.color1}
                    color2={data.color2}
                    color3={data.color3}
                    title={data.title}
                    beforePrice={data.beforePrice}
                    nowPrice={data.nowPrice}
                    buyNow={data.buyNow}
                    learnMore={data.learnMore}
                    image={data.image}
                    price={data.nowPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
