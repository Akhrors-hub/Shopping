import React, { useState } from 'react';
import axios from '../utils/axios'
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    inStock: true,
    imageURL: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send the new product data to the backend
    axios.post('/api/product', product)
      .then(response => {
        // Handle successful submission (redirect, show success message, etc.)
        console.log('Product added:', response);
      })
      .catch(error => {
        // Handle error
        console.error('Error adding product', error);
      });
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={product.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          In Stock:
          <input type="checkbox" name="inStock" checked={product.inStock} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="imageURL" value={product.imageURL} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
