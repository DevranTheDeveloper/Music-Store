

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
  const rt = product.rating;
  const createRatingStars = (rt) => {
    let starsHTML = '';
        const fullStarHTML = '<i className="fa-solid fa-star fa-2xl" style="color: #fdff80;"></i>';
        const halfStarHTML = '<i className="fa-regular fa-star-half-stroke fa-2xl" style="color: #fdff80;"></i>';
        const emptyStarHTML = '<i className="fa-regular fa-star fa-2xl" style="color: #fdff80;"></i>';

        const fullStars = Math.floor(rt);
        const hasHalfStar = (rt - fullStars) >= 0.5;

        for (let i = 0; i < fullStars; i++) {
          starsHTML += fullStarHTML;
        }

        if (hasHalfStar) {
          starsHTML += halfStarHTML;
        }

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
          starsHTML += emptyStarHTML;
        }

        return starsHTML;
  };
  
  const ratingContainer = document.querySelector(".rating");
  ratingContainer.innerHTML = createRatingStars(rt);



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
              <div className="l-c col-lg-6">
                <h2>{product.name}</h2>
                <img src={product.img} alt="e" />
              </div>
              <div className="r-c col-lg-6">
                <div className="rating">
                  {createRatingStars(product.rating)}
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
