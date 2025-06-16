import React from 'react';

const PricingDisplay = ({ product, selectedDealer, pricingData }) => {
  if (!product || !pricingData || pricingData.length === 0) return null;

  if (selectedDealer === 'all') {
    return (
      <div className="pricing-display">
        <h3>Pricing for {product}</h3>
        <table>
          <thead>
            <tr>
              <th>Dealer</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index}>
                <td>{item.dealer}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const dealerData = pricingData.find(item => item.dealer === selectedDealer);
  if (!dealerData) return null;

  return (
    <div className="pricing-display">
      <h3>Pricing for {product}</h3>
      <div className="dealer-price">
        <h4>{dealerData.dealer}</h4>
        <p className="price">${dealerData.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PricingDisplay;