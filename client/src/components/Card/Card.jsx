import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const imageUrl = item?.img?.formats?.small?.url;
  const productId = item?.id;
  const price = item?.price;
  const title = item?.title;

  return (
    <Link style={{color:"white",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between', // To distribute space evenly
      width: '250px', // Adjust width as needed
      height: '350px', // Adjust height as needed
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      overflow: 'hidden'
    }} to={`/product/${item.slug}`}>
      <img style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover'
      }} src={imageUrl} alt={title} />
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h2>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>${price}</p>
        <button style={{
          backgroundColor: '#f0c14b',
          color: '#333',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Add to Cart</button>
      </div>
    </Link>
  );
};

export default Card;