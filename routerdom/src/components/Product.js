import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ productData }) {
  const { id, name, price } = productData;

  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "5px", backgroundColor: "yellow" }}>
      <div>
        <h2>Ürün Detayı</h2>
      </div>
      <h3>İsim: {name}</h3>
      <h3>Fiyat: {price}</h3>
      <button
        style={{ borderRadius: "10px", backgroundColor: "yellow" }}
        onClick={() => navigate("/product-details/" + id)}
      >
        Detayına Git
      </button>
    </div>
  );
}

export default Product;
