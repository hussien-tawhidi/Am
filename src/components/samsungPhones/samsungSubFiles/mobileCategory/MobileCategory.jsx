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
            <MobileCategoryCard samsungMobiels={dataFile} />
          </div>
        </div>
      </div>
    </div>
  );
}
