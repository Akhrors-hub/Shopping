import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data by ID from the backend
    fetch(`/api/products/${id}`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product', error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <img src={product.imageURL} alt={product.name} style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default ProductPage;
