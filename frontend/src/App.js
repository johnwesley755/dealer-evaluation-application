import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import DealerList from './components/DealerList';
import PricingDisplay from './components/PricingDisplay';
import config from './config';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedDealer, setSelectedDealer] = useState('');
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    if (!selectedProduct) return;

    const fetchPricingData = async () => {
      try {
        const response = await fetch(`${config.dealerServiceUrl}/pricing/${selectedProduct}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        const data = await response.json();
        setPricingData(data);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricingData();
  }, [selectedProduct]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedDealer(''); // Reset dealer selection when product changes
  };

  const handleDealerSelect = (dealer) => {
    setSelectedDealer(dealer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dealer Evaluation App</h1>
      </header>
      <main>
        <div className="container">
          <ProductList onProductSelect={handleProductSelect} />
          {selectedProduct && (
            <DealerList 
              product={selectedProduct} 
              onDealerSelect={handleDealerSelect} 
            />
          )}
          {selectedProduct && selectedDealer && (
            <PricingDisplay 
              product={selectedProduct}
              selectedDealer={selectedDealer}
              pricingData={pricingData}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
