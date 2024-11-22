import React, { useEffect, useState } from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import useFetch from '../../hooks/useFetch';
const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: `Bearer c1d357cfc40139e651c7bcdb66f59c9db04d4a78edfd29f03b23486e7eb0d9d50f6083de0ce7622cafd2786a42ca7d0013aac62311df888412af89690c503ae146a6a283357b02b3022282fe6ba71a4443cadaebd61a830508d35df0f88139b67646ff6dca51aa2bca1b215f9e0fcefedc82c14b80bb9ee41ae374e32979df5f`, // Replace with your actual token
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [type]);

   const { data, loading, error } = useFetch(
     `/products?populate=*&[filters][type][$eq]=${type}`
   );
   const dataset = data;
   console.log("dataset", dataset)
const titlea = products; 
const titles = titlea?.data;

// const {title, isNew} = titlea;
// const titlcard = titlea?.attributes.title;
console.log("products", titles)
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          titles?.map((item) => (
            <Card item={item} title={item?.title} key={item?.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
