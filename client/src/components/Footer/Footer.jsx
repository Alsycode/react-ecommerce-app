import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          We are a passionate team of creators, designers, and innovators committed to providing high-quality products that enhance the everyday lives of our customers. With years of experience in the industry, we aim to combine functionality, design, and innovation in everything we do. Our mission is to bring you products that are not only stylish but also practical and durable.
          </span>
        </div>
        <div className="item">
  <h1>Contact</h1>
  {/* <span>
    At ChicCholi, we pride ourselves on providing exceptional customer service. 
    Whether you're looking for the latest fashion trends, need assistance with an order, 
    or simply have questions about our products, we're here to help. Our team is committed 
    to offering a seamless shopping experience from start to finish.
  </span> */}
  <span>
    Feel free to reach out to us at any time — we value your feedback and are always 
    happy to assist with any inquiries you may have. Thank you for choosing ChicCholi, 
    where style meets convenience!
  </span>
  <span>
    We look forward to hearing from you soon!
  </span>
  <span>
    Phone: +1 234 567 8900
  </span>
  <span>
    Email: support@chiccholi.com
  </span>
  <span>
    Address: 123 Fashion Street, New York, NY 10001, USA
  </span>
</div>

      </div>
      <div className="bottom">
        <div className="left">
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
        backgroundColor: '#2a2a2a', // Light background for contrast
        fontFamily: 'Arial, sans-serif', // Fallback font
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: '#7c4dff', // Elegant purple color
          fontSize: '3em', // Large font size for emphasis
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, serif', // Elegant serif font for "Chic"
            fontWeight: 'bold',
          }}
        >
          Chic
        </span>
        <span
          style={{
            fontFamily: 'Dancing Script, cursive', // Flowing script font for "Choli"
            fontSize: '0.6em', // Slightly smaller font size
            color: '#ff4081', // Complementary pink color for "Choli"
            position: 'absolute',
            bottom: '-0.3em', // Slightly lower position
            left: 0, // Align to left
          }}
        >
          Choli
        </span>
      </div>
    </div>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
