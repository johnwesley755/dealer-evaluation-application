from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample product data
products = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Desktop PC",
    "Monitor",
    "Keyboard",
    "Mouse",
    "Headphones"
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)