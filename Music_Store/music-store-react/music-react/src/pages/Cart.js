import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartI = localStorage.getItem('cart');
    const cartItemsArray = JSON.parse(cartI) || [];
    setCartItems(cartItemsArray);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace(',', '').replace('€', '')),
    0
  );

  return (
    <>
      <Navbar />
      <div className="products">
        <h1>Your Cart</h1>
        <div className="cart">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <h4>{item.name}</h4>
              <div className="pc">
                <h4>{item.price}</h4>
                <i
                  className="fa-solid fa-trash fa-2xl"
                  style={{ color: 'rgb(216, 64, 64)', cursor: 'pointer' }}
                  onClick={() => handleRemoveItem(item.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="all">
          <div className="ic">
            <h4>Cost: </h4>
            <h4 className="top-price">
              {totalPrice.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
