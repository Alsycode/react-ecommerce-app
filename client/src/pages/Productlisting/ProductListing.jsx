import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import Card from "../../components/Card/Card";
import "./Productlisting.scss";
import useFetch from "../../hooks/useFetch";

const ProductListing = () => {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(`/products?populate=*`);

  // Handle filtering logic only after data is fetched
  useEffect(() => {
    if (data) {
      // Filter products where the category title matches the URL category
      const filtered = data.filter((item) => {
        return (
          item?.categories && 
          Array.isArray(item?.categories) && 
          item?.categories[0]?.title.toLowerCase() === category.toLowerCase()
        );
      });
      setProducts(filtered);
    }
  }, [data, category]); // Re-run effect whenever 'data' or 'category' changes

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>Error loading products.</p>; // Handle error state
  }

  return (
    <div className="productListing">
      <div className="top">
        <h1>{category.toUpperCase()} Products</h1>
        <p>Browse the latest and greatest products in the {category} category!</p>
      </div>
      <div className="productGrid">
        {products.length === 0 ? (
          <p>No products found in this category.</p> // Show message if no products match
        ) : (
          products.map((item) => (
            <Card item={item} title={item?.title} key={item?.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListing;
