import React, { useState, useEffect } from 'react';
import config from '../config';

const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.productServiceUrl}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="product-list">
      <h3>Select a Product</h3>
      <select 
        onChange={(e) => onProductSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Choose a product</option>
        {products.map((product, index) => (
          <option key={index} value={product}>{product}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductList;