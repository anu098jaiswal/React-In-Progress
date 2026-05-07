import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

//2.creating product card
const PAGE_SIZE=10;

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
  const[currentPage,setCurrentPage]= useState(0);

  //1.api call
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const totalPages=products.length;
  const noPages=Math.ceil(totalPages/PAGE_SIZE);
 //need to calculate start and end  if currpage= 2 start=20 end=30
 const start=currentPage* PAGE_SIZE;
 const end= PAGE_SIZE + start;

 function handlePageChange(n){
  setCurrentPage(n);
 }

  return (
    <div className="Pagination">
      <h1>Pagination</h1>

      {/*1 2 3 4...*/}
      <div className="pagination-container">
        <span onClick={() => goToPrevPage()}>
          ⬅︎</span>
        {[...Array(noPages).keys()].map((n) => (
          <span
            className="page-number"
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </span>
        ))}
        <span onClick={() => goToNaxrPage()}>
          -></span>
      </div>

      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default Pagination;
