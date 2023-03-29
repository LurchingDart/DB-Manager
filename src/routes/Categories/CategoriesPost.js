import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import "../../styles/Categories/Categories.css"
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
        <div className="containerCategories">
            <header className="headerCategories">
                <h1 className="titleCategories">Categories</h1>
            </header>
            <main className="bodyCategories">
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
            </main>
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

export default Categories;