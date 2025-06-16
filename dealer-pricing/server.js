const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample pricing data
const pricingData = {
  'Laptop': [
    { dealer: 'TechWorld', price: 999.99 },
    { dealer: 'ElectroMart', price: 1099.99 },
    { dealer: 'ComputerZone', price: 949.99 }
  ],
  'Smartphone': [
    { dealer: 'TechWorld', price: 699.99 },
    { dealer: 'ElectroMart', price: 749.99 },
    { dealer: 'MobileHub', price: 679.99 }
  ],
  'Tablet': [
    { dealer: 'TechWorld', price: 399.99 },
    { dealer: 'ElectroMart', price: 429.99 },
    { dealer: 'TabletZone', price: 389.99 }
  ],
  'Desktop PC': [
    { dealer: 'TechWorld', price: 1299.99 },
    { dealer: 'ElectroMart', price: 1349.99 },
    { dealer: 'ComputerZone', price: 1249.99 }
  ],
  'Monitor': [
    { dealer: 'TechWorld', price: 249.99 },
    { dealer: 'ElectroMart', price: 279.99 },
    { dealer: 'ScreenDeals', price: 239.99 }
  ],
  'Keyboard': [
    { dealer: 'TechWorld', price: 49.99 },
    { dealer: 'ElectroMart', price: 59.99 },
    { dealer: 'AccessoryShop', price: 44.99 }
  ],
  'Mouse': [
    { dealer: 'TechWorld', price: 29.99 },
    { dealer: 'ElectroMart', price: 34.99 },
    { dealer: 'AccessoryShop', price: 24.99 }
  ],
  'Headphones': [
    { dealer: 'TechWorld', price: 79.99 },
    { dealer: 'ElectroMart', price: 89.99 },
    { dealer: 'AudioDeals', price: 74.99 }
  ]
};

// Get pricing for a specific product
app.get('/pricing/:productName', (req, res) => {
  const { productName } = req.params;
  
  if (pricingData[productName]) {
    res.json(pricingData[productName]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Dealer pricing service running on port ${PORT}`);
});