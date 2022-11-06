import React from "react";

export default function SamsungServicesCard({ servicesData }) {
  return (
    <div className="row">
      {servicesData.map((services) => (
        <div className="col-sm-4 col-12" key={services.id}>
          <div className="samsungServicesPart">
            <h2>{services.title}</h2>
            <p>{services.text}</p>
            <a href="/">{services.learnMore}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
