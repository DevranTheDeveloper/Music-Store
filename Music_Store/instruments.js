fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const prdc = document.querySelector(".products")

    for (let count of products) {
      const box = `
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12" data-filter="${count.id}">
          <div class="pimg">
            <img src="${count.img}" alt="">
          </div>
          <div class="aciklap">
            <h5>${count.name}</h5>
            <p>${count.price}</p>
          </div>
          <div class="add">
            <!-- Add the data-product attribute and set it to the JSON string of the product -->
            <a href="details.html" class="details" data-product='${JSON.stringify(count)}'><button>Show Details</button></a>
            <button class="add-cart">Add To Cart</button>
          </div>
        </div>
  `
  prdc.insertAdjacentHTML("beforeend", box)
    }
    const filter = document.querySelector("#filter");
    
    filter.addEventListener("click", function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
        if (checkboxes.length === 0) {
          const boxes = document.querySelectorAll('.box');
          boxes.forEach((box) => {
            box.style.display = "block";
          });
        } else {
          const selectedInstruments = Array.from(checkboxes).map((checkbox) => checkbox.value);
        
          const boxes = document.querySelectorAll('.box');
        
          boxes.forEach((box) => {
            const filterValue = box.dataset.filter;
          
            if (selectedInstruments.includes(filterValue)) {
              box.style.display = "block";
            } else {
              box.style.display = "none";
            }
          });
        }
      });
    
    const cartItems = [];
    
    const addButtons = document.querySelectorAll(".add-cart");
    
    addButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const box = button.closest(".box"); //en yakın üst öğeyi seçer
        const name = box.querySelector(".aciklap h5").textContent; // seçilen öğelerin bilgilerini seçer
        const price = box.querySelector(".aciklap p").textContent;
        const id = box.dataset.filter;
        
        const newItem = { // bilgisi alınan öğeleri yeni bir objeye yerleştirir
          name: name,
          price: price,
          id: id
        };
        
        cartItems.push(newItem); //oluşan obje yeni dizenin içine giren 
        
        const cartItemsJSON = JSON.stringify(cartItems);
        localStorage.setItem("cart", cartItemsJSON); // burda da local a yazılır
      });
    });

    const detailButtons = document.querySelectorAll(".details");

    detailButtons.forEach((button) => {
      button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const productData = JSON.parse(button.dataset.product);
        const asd = JSON.stringify(productData);
        localStorage.setItem("selectedProduct", asd);
        window.location.href = button.getAttribute("href"); // Go to the details page after storing the data
      });
    });
  })
  .catch(error => console.log("hata", error));

  const get = localStorage.getItem("user");
  const sorgu = JSON.parse(get);

  if (sorgu[0].name.includes(name)) {
      const login = document.querySelector(".login-item")
      login.innerHTML = sorgu[0].name + " " + sorgu[0].surname 
  }