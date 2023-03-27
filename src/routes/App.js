
import '../styles/Categories.css';
import axios from 'axios';

//Funcion para enviar los datos del formulario a la API
function handleSubmit() {
  //Creacion de las variables que almacena el valor de los inputs 
  const name = document.querySelector(".inputsContainerLeft input").value;
  const description = document.querySelector(".inputsContainerRight input").value;
  //Envio de los datos a la API
  axios.post('https://cum-tech-api.vercel.app/category', { name, description })
  //Si la solicitud es exitosa ...
    .then(response => {
      console.log(response);
      //Se muestra el codigo de respuesta en la consola que se encuentra en el footer
      document.querySelector(".consoleDisplayContentStatus").innerHTML = response.status;
      //Se muestra el mensaje de respuesta en la consola que se encuentra en el footer
      document.querySelector(".consoleDisplayContentText").innerHTML = JSON.stringify(response.data);
      //Se cambia el color del texto de la consola a verde
      document.querySelector(".consoleDisplayContentStatus").style.color = "green";
    })
    //Si la solicitud no es exitosa ...
    .catch(error => {
      //Si la solicitud no es exitosa por un error en el servidor ...
      if (error.response) {
        //Se muestra el status de la respuesta de error en la consola que se encuentra en el footer
        document.querySelector(".consoleDisplayContentText").innerHTML = error.response.status;
      } else {
        //Si la solicitud no es exitosa por otro error se muestra el mensaje de error en la consola que se encuentra en el footer
        document.querySelector(".consoleDisplayContentText").innerHTML = "Error en la solicitud";
      }
      //Se cambia el color del texto de la consola a rojo
      document.querySelector(".consoleDisplayContentText").style.color = "red";
    });
}


function App() {
  return (
    <div className="App">
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
      <footer className="App-footer">
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

export default App;
