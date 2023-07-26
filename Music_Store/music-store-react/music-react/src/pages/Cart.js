import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function Cart() {

  // const cartI = localStorage.getItem("cart");
  // const cartItemsJS = JSON.parse(cartI);
  // console.log(cartItemsJS);

  // const cartAdd = document.querySelector(".cart");
  // const totalPriceElement = document.querySelector(".top-price");

  // function renderCartItems() {
  //   cartAdd.innerHTML = ""; // Sepeti her yeniden çizdiğimizde içeriği temizleyelim

  //   let totalPrice = 0;

  //   for (const count of cartItemsJS) {
  //     const ci = `
  //     <div className="cart-item">
  //       <h4>${count.name}</h4>
  //       <div className="pc">
  //         <h4>${count.price}</h4>
  //         <i className="fa-solid fa-trash fa-2xl" style={{color: "rgb(216, 64, 64)", cursor: "pointer"}} data-id="${count.id}"></i>
  //       </div>
  //     </div>
  //   `;
  //     cartAdd.insertAdjacentHTML("beforeend", ci);

  //     const priceString = count.price.replace(",", "").replace("€", "");
  //     const priceNumber = parseFloat(priceString);
  //     totalPrice += priceNumber;
  //   }

  //   // Toplam fiyatı kutuya yazdıralım
  //   totalPriceElement.textContent = totalPrice.toLocaleString("de-DE", {
  //     style: "currency",
  //     currency: "EUR",
  //   });

  //   const trashIcons = document.querySelectorAll(".fa-trash");
  //   trashIcons.forEach((trashIcon) => {
  //     trashIcon.addEventListener("click", function () {
  //       const itemId = trashIcon.dataset.id;
  //       const index = cartItemsJS.findIndex((item) => item.id === itemId);

  //       if (index !== -1) {
  //         cartItemsJS.splice(index, 1);
  //         const updatedCartItemsJSON = JSON.stringify(cartItemsJS);
  //         localStorage.setItem("cart", updatedCartItemsJSON);

  //         renderCartItems();
  //       }
  //     });
  //   });
  // }

  // renderCartItems();


  return (
    <>
      <Navbar />
      <div className="products">
        <h1>Your Cart</h1>
        <div className="cart">
        </div>

        <div className="all">
          <div className="ic">
            <h4>Cost: </h4>
            <h4 className="top-price"></h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart