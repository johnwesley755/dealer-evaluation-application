import React, { useState, useEffect } from 'react';
import config from '../config';

const DealerList = ({ product, onDealerSelect }) => {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!product) return;

    const fetchDealers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${config.dealerServiceUrl}/pricing/${product}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dealers');
        }
        const data = await response.json();
        setDealers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDealers();
  }, [product]);

  if (!product) return null;
  if (loading) return <p>Loading dealers...</p>;
  if (error) return <p>Error loading dealers: {error}</p>;

  return (
    <div className="dealer-list">
      <h3>Select a Dealer</h3>
      <select 
        onChange={(e) => onDealerSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Choose a dealer</option>
        <option value="all">All Dealers</option>
        {dealers.map((dealer, index) => (
          <option key={index} value={dealer.dealer}>{dealer.dealer}</option>
        ))}
      </select>
    </div>
  );
};

export default DealerList;