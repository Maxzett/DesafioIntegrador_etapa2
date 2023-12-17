import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";

const NewCollections = ({ products, fetchProductsData }) => {
  return (
    <div className="new_collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              product={product}
              fetchProductsData={fetchProductsData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
