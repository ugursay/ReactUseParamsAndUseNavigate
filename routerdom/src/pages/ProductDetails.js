import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { productList } from "../data/productList";

function ProductDetails() {
  const { id } = useParams(); //id verisini almak için

  return (
    <div>
      <h1>Ürün Detayları</h1>
      <hr></hr>
      {productList &&
        productList.map((product) => {
          if (product.id === id) {
            return <Product key={product.id} productData={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
