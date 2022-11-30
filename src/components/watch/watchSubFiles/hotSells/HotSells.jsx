import React from "react";
import { watchesHotSells } from "../../../../data/Watch";
import HotSellsCard from "./HotSellsCard";

export default function HotSells() {
  return (
    <div className="watchesHotSells">
      <div className="lgTitle">
        <h2>hot sell in this month</h2>
      </div>
      <div className="row">
        {watchesHotSells.map((data) => (
          <div className="col-lg-4 col-sm-6 col-12 mb-4" key={data.id}>
            <HotSellsCard
              id={data.id}
              image={data.image}
              price={data.price}
              title={data.title}
              newText={data.newText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
