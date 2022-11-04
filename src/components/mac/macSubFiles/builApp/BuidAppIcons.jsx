import React, { useEffect, useState } from "react";

export default function BuidAppIcons({ buildApp, builAppDataApp }) {
  const [category, setCategory] = useState("safari");
  const [allProducts, setAllProducts] = useState(builAppDataApp);

  useEffect(() => {
    if (category === "safari") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "safari"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "note") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "note"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "number") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "number"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "photos") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "photos"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "movie") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "movie"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "band") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "band"
      );
      setAllProducts(filteredProduct);
    }

    if (category === "pages") {
      const filteredProduct = builAppDataApp.filter(
        (item) => item.category === "pages"
      );
      setAllProducts(filteredProduct);
    }
  }, [category]);
  return (
    <>
      <div className="build-app-icons">
        {buildApp.map((buildApp) => (
          <div key={buildApp.id}>
            <div
              className="icon"
              onClick={() => setCategory(buildApp.category)}
            >
              <img src={buildApp.icon} alt="" />
              <p>{buildApp.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="icon-app-products">
        {allProducts.map((p) => (
          <div key={p.id}>
            <p>{p.desc}</p>
            <a href="/">{p.learnMore}</a>
          </div>
        ))}
      </div>
    </>
  );
}
