import React from "react";
import FilterAccesspries from "./FilterAccesspries";

export default function AccesssoreisProducts() {
  return (
    <div className="container">
      <div className="accessoriesFilter">
        <FilterAccesspries
          fiterCategory="iphone"
          title="Iphones company Accessories"
        />
      </div>
      <FilterAccesspries
        fiterCategory="samsung"
        title="Samsung company accessories"
      />
      <FilterAccesspries
        fiterCategory="huawei"
        title="Huawei company accessories"
      />
      <FilterAccesspries fiterCategory="mac" title="Mac lapTop accessories" />
      <FilterAccesspries
        fiterCategory="cable&charger"
        title="phones cable  and chargers"
      />
      <FilterAccesspries
        fiterCategory="microsoft"
        title="Microsof company accessories"
      />
    </div>
  );
}
