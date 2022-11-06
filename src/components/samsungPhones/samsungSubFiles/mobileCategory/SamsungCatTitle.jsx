import React, { useState } from "react";

export default function SamsungCatTitle({
  categoryTitles,
  filterData,
  setDataFile,
  filterSamsungMobiel,
}) {
  const [filterItem, setFilterItem] = useState(false);

  const onFilterItem = () => {
    setFilterItem(!filterItem);
  };
  return (
    <div className="samsungFilterMobile">
      <p className="filter-samsung-mobile" onClick={onFilterItem}>
        filter products
      </p>
      <div className={filterItem ? "filter showFilterItem" : "filter"}>
        <div className="SamsungCatTitle">
          <p
            onClick={() => {
              setDataFile(filterSamsungMobiel);
              onFilterItem();
             
            }}
          
          >
            All Smart Phones
          </p>
          {categoryTitles.map((title) => (
            <div key={title.id}>
              <p
                onClick={() => {
                  filterData(title.category);
                  onFilterItem();
                }}
              
              >
                {title.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
