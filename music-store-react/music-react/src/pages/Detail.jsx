

import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Detail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productDataJSON = localStorage.getItem("selectedProduct");
    if (productDataJSON) {
      const product = JSON.parse(productDataJSON);
      setProduct(product);
    }
  }, []);


  const handleAddToCart = () => {
    const cartItemsJSON = localStorage.getItem("cart");
    const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];

    const newItem = {
      name: product.name,
      price: product.price,
      id: product.id
    };

    cartItems.push(newItem);

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        {product ? (
          <div className="container inner-content">
            <div className="row">
              <div className="l-cd col-lg-6">
                <h2>{product.name}</h2>
                <div className="imgd" style={{
                  background: `url(${product.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '250px',
                  heigth: '250px'
                }}></div>
              </div>
              <div className="r-cd col-lg-6">
                <div className="rating">

                </div>
                <h4 className="mt-5">{product.description}</h4>
                <ul className="ozel mt-5">
                  <li>{product.feature1}</li>
                  <li>{product.feature2}</li>
                  <li>{product.feature3}</li>
                </ul>
                <div className="altt d-flex justify-content-between align-items-center">
                  <div className="prcc d-flex">
                    <h3 className="Price">Price: </h3>
                    <h3 className="cost">{product.price}</h3>
                  </div>
                  <button className="add-cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
