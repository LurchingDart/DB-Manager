import React from 'react'
import axios from 'axios';
import "../../styles/Products/ProductsPost.css"
// import Console from './../components/Console';

function handleSubmit() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const stock = document.getElementById("stock").value;
    const description = document.getElementById("description").value;
    axios.post('https://cum-tech-api.vercel.app/category', { name, price, category, image, stock, description })
        .then(response => {
        console.log(response);
        document.querySelector(".consoleDisplayContentStatus").innerHTML = response.status;
        document.querySelector(".consoleDisplayContentText").innerHTML = JSON.stringify(response.data);
        document.querySelector(".consoleDisplayContentStatus").style.color = "green";
        })
        .catch(error => {
            console.log(error)
            if (error.code === 'ERR_NETWORK') {
                document.querySelector(".consoleDisplayContentStatus").innerHTML = "500";
            }
            document.querySelector(".consoleDisplayContentText").innerHTML = error.message;
            document.querySelector(".consoleDisplayContentStatus").style.color = "red";
    });
}

function Categories() {
    return (
        <div className="containerProductsPost">
            <header className="headerProductsPost">
                <h1 className="titleProductsPost">Products</h1>
            </header>
            <main className="bodyProductsPost">
                <div className="inputsProductsPostContainer">
                    <div className="inputsProductsPostContainerLeft">
                        <h6 className="inputsProductsPostTitle">Name</h6>
                        <input id="name" type="text" className="inputsProductsPostHolders" />
                        <h6 className="inputsProductsPostTitle">Price</h6>
                        <input id="price" type="number" className="inputsProductsPostHolders" />
                        <h6 className="inputsProductsPostTitle">Category</h6>
                        <input id="category" type="number" className="inputsProductsPostHolders" />
                    </div>
                    <div className="inputsProductsPostContainerRight">
                        <h6 className="inputsProductsPostTitle">Image</h6>
                        <input id="image" type="text" className="inputsProductsPostHolders" />
                        <h6 className="inputsProductsPostTitle">Stock</h6>
                        <input id="stock" type="number" className="inputsProductsPostHolders" />
                        <h6 className="inputsProductsPostTitle">Description</h6>
                        <input id="description" type="number" className="inputsProductsPostHolders" />
                    </div>
                </div>
                <div className="buttonsProductsPostContainer">
                <button 
                className="buttonProductsPost"
                onClick={handleSubmit}
                >
                    Submit
                </button>
                </div>
            </main>
            <footer className="footerProductsPost">
            <div className="consoleBG">
                <div className="consoleDisplay">
                    <p className="consoleDisplayContentStatus"></p>
                    <p className="consoleDisplayContentText"></p>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Categories;