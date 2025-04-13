import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

//2.creating product card

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt="title" className="product-img" />
      <span>{title}</span>
    </div>
  );
};

function Pagination() {
  const [products, setProducts] = useState([]);

  //1.api call
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Pagination">
      <h1>Pagination</h1>
      <div className="product-container">
        {products.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default Pagination;
