const cartI = localStorage.getItem("cart");
const cartItemsJS = JSON.parse(cartI);
console.log(cartItemsJS);

const cartAdd = document.querySelector(".cart");
const totalPriceElement = document.querySelector(".top-price");

function renderCartItems() {
  cartAdd.innerHTML = ""; // Sepeti her yeniden çizdiğimizde içeriği temizleyelim

  let totalPrice = 0;

  for (const count of cartItemsJS) {
    const ci = `
      <div class="cart-item">
        <h4>${count.name}</h4>
        <div class="pc">
          <h4>${count.price}</h4>
          <i class="fa-solid fa-trash fa-2xl" style="color: rgb(216, 64, 64); cursor: pointer;" data-id="${count.id}"></i>
        </div>
      </div>
    `;
    cartAdd.insertAdjacentHTML("beforeend", ci);

    const priceString = count.price.replace(",", "").replace("€", "");
    const priceNumber = parseFloat(priceString);
    totalPrice += priceNumber;
  }

  // Toplam fiyatı kutuya yazdıralım
  totalPriceElement.textContent = totalPrice.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  const trashIcons = document.querySelectorAll(".fa-trash");
  trashIcons.forEach((trashIcon) => {
    trashIcon.addEventListener("click", function () {
      const itemId = trashIcon.dataset.id;
      const index = cartItemsJS.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        cartItemsJS.splice(index, 1);
        const updatedCartItemsJSON = JSON.stringify(cartItemsJS);
        localStorage.setItem("cart", updatedCartItemsJSON);

        renderCartItems();
      }
    });
  });
}

renderCartItems();

    const get = localStorage.getItem("user");
    const sorgu = JSON.parse(get);

    if (sorgu[0].name.includes(name)) {
        const login = document.querySelector(".login-item")
        login.innerHTML = sorgu[0].name + " " + sorgu[0].surname 
    }