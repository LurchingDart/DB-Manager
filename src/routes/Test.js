import React from 'react'
import axios from 'axios';
import "../styles/Categories.css"
// import Console from './../components/Console';

function handleSubmit() {
    const name = document.querySelector(".inputsCategoriesContainerLeft input").value;
    const description = document.querySelector(".inputsCategoriesContainerRight input").value;
    axios.post('https://cum-tech-api.vercel.app/category', { name, description })
        .then(response => {
        console.log(response);
        document.querySelector(".consoleDisplayContentStatus").innerHTML = response.status;
        document.querySelector(".consoleDisplayContentText").innerHTML = JSON.stringify(response.data);
        document.querySelector(".consoleDisplayContentStatus").style.color = "green";
        })
        .catch(error => {
        if (error.response) {
            document.querySelector(".consoleDisplayContentText").innerHTML = error.response.status;
        } else {
            document.querySelector(".consoleDisplayContentText").innerHTML = "Error en la solicitud";
        }
        document.querySelector(".consoleDisplayContentText").style.color = "red";
    });
}

function Test() {
    return (
        <div className="containerCategories">
            <header className="headerCategories">
                <h1 className="titleCategories">Categories</h1>
            </header>
            <body className="bodyCategories">
                <div className="inputsCategoriesContainer">
                <div className="inputsCategoriesContainerLeft">
                    <h4 className="inputsCategoriesTitle">Name</h4>
                    <input type="text" className="inputsCategoriesHolders" />
                </div>
                <div className="inputsCategoriesContainerRight">
                <h4 className="inputsCategoriesTitle">Description</h4>
                    <input type="text" className="inputsCategoriesHolders" />
                </div>
                </div>
                <div className="buttonsCategoriesContainer">
                <button 
                className="buttonCategories"
                onClick={handleSubmit}
                >
                    Submit
                </button>
                </div>
            </body>
            <footer className="footerCategories">
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

export default Test;