import React from "react";
import ProductCom from "../components/Product";
import { productList } from "../data/productList";

function Products() {
  return (
    <div>
      {productList &&
        productList.map((productData) => {
          return <ProductCom key={productData.id} productData={productData} />;
        })}
    </div>
  );
}

export default Products;
