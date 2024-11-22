import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const slug = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][slug][$eq]=${slug}`);

  // Ensure data[0] exists and has the necessary fields
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product data</div>;
  }

  if (!data || !data[0]) {
    return <div>No product found</div>;
  }

  const product = data[0]; // Destructure product data from data[0]
  const titleima = product?.img?.formats?.thumbnail?.url;
console.log("product", product)

  return (
    <div className="product">
      {/* Ensure that product data exists and render the product details */}
      <div className="left">
        <div className="images">
          {/* Check if product images exist */}
          {product?.img && (
            <img
              src={product?.img?.formats?.small?.url}
              alt="product"
              onClick={() => setSelectedImg("img")}
            />
          )}
          {product?.img2 && (
            <img
              src={product?.img2?.formats?.small?.url}
              alt="product"
              onClick={() => setSelectedImg("img2")}
            />
          )}
        </div>
        <div className="mainImg">
          {/* Render the selected image */}
          {product?.[selectedImg]?.formats?.small?.url && (
            <img
              src={product?.[selectedImg]?.formats?.small?.url}
              alt="selected product"
            />
          )}
        </div>
      </div>
      <div className="right">
        <h1>{product?.title}</h1>
        <span className="price">${product?.price}</span>
        <p>{product?.desc}</p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: product?.id,
                title: product?.title,
                desc: product?.desc,
                price: product?.price,
                img: product?.img?.formats?.thumbnail?.url,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          {/* <span>Vendor: Polo</span> */}
          <span>Product Type: {product?.sub_categories[0].title}</span>
          <span>Tag: {product?.sub_categories[0].title}, {product?.title} </span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
