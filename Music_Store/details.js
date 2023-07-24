// bu sayfayı çok çalış (GPT sağ olsun)

document.addEventListener("DOMContentLoaded", function() {
    const productDataJSON = localStorage.getItem("selectedProduct");
    if (productDataJSON) {
        const product = JSON.parse(productDataJSON);
        
        const main = document.querySelector(".main-content");
        const rt = product.rating;

        const item = `
            <div class="container inner-content">
                <div class="row">
                    <div class="l-c col-lg-6">
                        <h2>${product.name}</h2>
                        <img src="${product.img}" alt="e">
                    </div>
                    <div class="r-c col-lg-6">
                        <div class="rating">
                            
                        </div>
                        <h4 class="mt-5">${product.description}</h4>
                        <ul class="ozel mt-5">
                            <li>${product.feature1}</li>
                            <li>${product.feature2}</li>
                            <li>${product.feature3}</li>
                        </ul>
                        <div class="altt d-flex justify-content-between align-items-center">
                            <div class="prcc d-flex">
                                <h3 class="Price">Price: </h3><h3 class="cost">${product.price}</h3>
                            </div>
                            <button class="add-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        main.insertAdjacentHTML("beforeend", item);

        function createRatingStars(rt) {
            let starsHTML = '';
            const fullStarHTML = '<i class="fa-solid fa-star fa-2xl" style="color: #fdff80;"></i>';
            const halfStarHTML = '<i class="fa-regular fa-star-half-stroke fa-2xl" style="color: #fdff80;"></i>';
            const emptyStarHTML = '<i class="fa-regular fa-star fa-2xl" style="color: #fdff80;"></i>';

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
        }

        const ratingContainer = document.querySelector(".rating");
        ratingContainer.innerHTML = createRatingStars(rt);

        const addToCartButton = document.querySelector(".add-cart");
        addToCartButton.addEventListener("click", function() {
            const cartItemsJSON = localStorage.getItem("cart");
            const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];

            const newItem = {
                name: product.name,
                price: product.price,
                id: product.id
            };

            cartItems.push(newItem);

            localStorage.setItem("cart", JSON.stringify(cartItems));
        });
    }
});
    const get = localStorage.getItem("user");
    const sorgu = JSON.parse(get);

    if (sorgu[0].name.includes(name)) {
        const login = document.querySelector(".login-item")
        login.innerHTML = sorgu[0].name + " " + sorgu[0].surname 
    }