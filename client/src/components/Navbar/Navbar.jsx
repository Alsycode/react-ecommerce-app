import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div
      className="navbar"
      style={{
        position: "sticky", // Make navbar sticky
        top: 0, // Always stick to the top
        left: 0,
        right: 0,
        zIndex: 1000, // Make sure it's on top of other content
        background: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Glassmorphism blur effect
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)", // Soft border for the navbar
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for separation
      }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/productListing/women">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/productListing/men">Men</Link>
          </div>
          {/* <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div> */}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: '#7c4dff',
              fontSize: '3em',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontWeight: 'bold',
              }}
            >
              Chic
            </span>
            <span
              style={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '0.6em',
                color: '#ff4081',
                position: 'absolute',
                bottom: '-0.3em',
                left: 0,
              }}
            >
              Choli
            </span>
          </div>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">Contact</Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
