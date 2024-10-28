import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product-screen.css";

const ProductScreen = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      setProduct(response.data);
    }
  };

  return (
    <div>
      <h2>Product screen</h2>
      <div className="card-container">
        {product.map((each) => (
          <div className="card" key={each.id}>
            <h2 className="card-text category">{each.category}</h2>
            <img src={each.image} className="card-img-top" alt={each.title} />
            <div className="card-body">
              <h5 className="card-title">{each.title}</h5>
              <p className="card-text">{each.description}</p>
              <p className="card-text price">Price: ${each.price.toFixed(2)}</p>

              <button>
                <Link to={`/products/${each.id}`}>View Product</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScreen;
