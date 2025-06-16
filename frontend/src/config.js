// API URLs - will be replaced with actual Kubernetes service URLs
const config = {
  // For local development with port-forwarding
  productServiceUrl: process.env.REACT_APP_PRODUCT_SERVICE_URL || 'http://localhost:5000',
  dealerServiceUrl: process.env.REACT_APP_DEALER_SERVICE_URL || 'http://localhost:3001'
};

export default config;