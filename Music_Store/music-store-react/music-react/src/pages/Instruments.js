import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function Instuments() {

//     fetch("products.json")
//         .then(response => response.json())
//         .then(products => {
//             const prdc = document.querySelector(".products")

//             for (let count of products) {
//                 const box = `
//         <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12" data-filter="${count.id}">
//           <div class="pimg">
//             <img src="${count.img}" alt="">
//           </div>
//           <div class="aciklap">
//             <h5>${count.name}</h5>
//             <p>${count.price}</p>
//           </div>
//           <div class="add">
//             <!-- Add the data-product attribute and set it to the JSON string of the product -->
//             <a href="/Details" class="details" data-product='${JSON.stringify(count)}'><button>Show Details</button></a>
//             <button class="add-cart">Add To Cart</button>
//           </div>
//         </div>
//   `
//                 prdc.insertAdjacentHTML("beforeend", box)
//             }
//             const filter = document.querySelector("#filter");

//             filter.addEventListener("click", function () {
//                 const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

//                 if (checkboxes.length === 0) {
//                     const boxes = document.querySelectorAll('.box');
//                     boxes.forEach((box) => {
//                         box.style.display = "block";
//                     });
//                 } else {
//                     const selectedInstruments = Array.from(checkboxes).map((checkbox) => checkbox.value);

//                     const boxes = document.querySelectorAll('.box');

//                     boxes.forEach((box) => {
//                         const filterValue = box.dataset.filter;

//                         if (selectedInstruments.includes(filterValue)) {
//                             box.style.display = "block";
//                         } else {
//                             box.style.display = "none";
//                         }
//                     });
//                 }
//             });

//             const cartItems = [];

//             const addButtons = document.querySelectorAll(".add-cart");

//             addButtons.forEach((button) => {
//                 button.addEventListener("click", function () {
//                     const box = button.closest(".box"); //en yakın üst öğeyi seçer
//                     const name = box.querySelector(".aciklap h5").textContent; // seçilen öğelerin bilgilerini seçer
//                     const price = box.querySelector(".aciklap p").textContent;
//                     const id = box.dataset.filter;

//                     const newItem = { // bilgisi alınan öğeleri yeni bir objeye yerleştirir
//                         name: name,
//                         price: price,
//                         id: id
//                     };

//                     cartItems.push(newItem); //oluşan obje yeni dizenin içine giren 

//                     const cartItemsJSON = JSON.stringify(cartItems);
//                     localStorage.setItem("cart", cartItemsJSON); // burda da local a yazılır
//                 });
//             });

//             const detailButtons = document.querySelectorAll(".details");

//             detailButtons.forEach((button) => {
//                 button.addEventListener("click", function (event) {
//                     event.preventDefault(); // Prevent the default link behavior
//                     const productData = JSON.parse(button.dataset.product);
//                     const asd = JSON.stringify(productData);
//                     localStorage.setItem("selectedProduct", asd);
//                     window.location.href = button.getAttribute("href"); // Go to the details page after storing the data
//                 });
//             });
//         })
//         .catch(error => console.log("hata", error));

    return (
        <>
            <Navbar />
            <header className="main-header">
                <div className="main-blr">
                    <h1>INSTRUMENTS</h1>
                </div>
            </header>
            <div className="blank"><h1>PRODUCTS</h1></div>
            <div className="ana d-flex">
                <div className="filters col-lg-3 col-md-3">
                    <h2>Instruments</h2>
                    <ul>
                        <li><h3>Guitars</h3>
                            <ul>
                                <li><input type="checkbox" id="e-g" value="e-g" /> Electro Guitar</li>
                                <li><input type="checkbox" id="a-g" value="a-g" /> Acoustic Guitar</li>
                                <li><input type="checkbox" id="b-g" value="b-g" /> Bass Guitar</li>
                            </ul>
                        </li><br /><br />
                        <li><h3>Pianos</h3>
                            <ul>
                                <li><input type="checkbox" id="e-p" value="e-p" /> Electro Piano</li>
                                <li><input type="checkbox" id="a-p" value="a-p" /> Acoustic Piano</li>
                                <li><input type="checkbox" id="g-p" value="g-p" /> Grand Piano</li>
                            </ul>
                        </li><br /><br />
                        <li><h3>Drums</h3>
                            <ul>
                                <li><input type="checkbox" id="e-d" value="e-d" /> Electro Drum</li>
                                <li><input type="checkbox" id="a-d" value="a-d" /> Acoustic Drum</li>
                            </ul>
                        </li><br /><br />
                        <li><h3>Violins</h3>
                            <ul>
                                <li><input type="checkbox" id="c-v" value="c-v" /> classNameic Violin</li>
                                <li><input type="checkbox" id="v-v" value="v-v" /> Viola</li>
                                <li><input type="checkbox" id="c-b" value="c-b" /> Contrabass</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="buttons">
                        <button id="filter">Filter</button>
                    </div>
                </div>
                <div className="products row col-9 d-flex">

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Instuments