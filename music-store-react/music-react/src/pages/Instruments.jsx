import React, { useEffect, useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Instruments() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const simulatedData = [
                {
                    img: "/img/urun1.jpg",
                    name: "J & D E-Gitarre ST Vintage Blue",
                    price: "149,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "4.5",
                    id: "e-g"
                },
                {
                    img: "img/urun2.jpg",
                    name: "J & D E-Gitarre LSC Gold Top P90",
                    price: "159,00 €", 
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "3",
                    id: "e-g"
            
                },
                {
                    img: "img/urun3.jpg",
                    name: "Gibson SG Special Vintage Cherry",
                    price: "1.444,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "5",
                    id: "e-g"
                },
                {
                    img: "img/urun4.jpg",
                    name: " Gibson J-45 Standard VS",
                    price: "2.799,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "4.5",
                    id: "a-g"
                },
                {
                    img: "img/urun5.jpg",
                    name: "Gibson ES-335 Figured Sixties",
                    price: "3.899,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "4",
                    id: "e-g"
                },
                {
                    img: "img/urun6.jpg",
                    name: "Fender Limited Edition American",
                    price: "1.315,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "3.5",
                    id: "b-g"
                },
                {
                    img: "img/urun7.jpg",
                    name: "Gewa G3 Studio E-Drum Set",
                    price: "1.899,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "3",
                    id: "e-d"
                },
                {
                    img: "img/urun8.jpg",
                    name: "Roland TD-17KVX2 E-Drum Set",
                    price: "1.698,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "4.5",
                    id: "e-d"
                },
                {
                    img: "img/urun9.jpg",
                    name: "Gewa E-Drum Set G9 PRO 5 SE",
                    price: "6.299,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "5",
                    id: "e-d"
                },
                {
                    img: "img/urun10.jpg",
                    name: " Yamaha Stage Custom Birch SBP2F56W Honey Amber",
                    price: "1.039,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "2.5",
                    id: "a-d"
                },
                {
                    img: "img/urun11.jpg",
                    name: "Yamaha Rydeen RDP2F5 Silver Glitter",
                    price: "689,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "0",
                    id: "a-d"
                },
                {
                    img: "img/urun12.jpg",
                    name: "Fame Maple Standard Jungle Set Schlagzeug",
                    price: "359,00 €",
                    feature1: "Lorem ipsum dolor sit amet.",
                    feature2: "Lorem ipsum dolor sit amet consectetur.",
                    feature3: "Lorem, ipsum dolor.",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati quidem voluptas corporis exercitationem laborum eius porro iusto velit eos.",
                    rating: "1",
                    id: "a-d"
            
                },
                
        ];

        setProducts(simulatedData);
    }, []);

    const addToCart = (product) => {
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

    const goToDetails = (product) => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "/Details";
    };

    return (
        <>
            <Navbar />
            <header className="main-header">
                <div className="main-blr">
                    <h1>INSTRUMENTS</h1>
                </div>
            </header>
            <div className="blank">
                <h1>PRODUCTS</h1>
            </div>
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
                <div className="products col-9">
                    {products.map((product) => (
                        <div className="box col-lg-3 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                            <div className="pimg">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="aciklap">
                                <h5>{product.name}</h5>
                                <p>{product.price}</p>
                            </div>
                            <div className="add">
                                <button onClick={() => goToDetails(product)}>Show Details</button>
                                <button onClick={() => addToCart(product)}>Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Instruments;
