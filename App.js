// composant principal de l'application, App, qui est rendu dans le navigateur
import "./App.css";
import FruitsMaster from "./components/FruitsMaster";
import { useState } from "react";

function App() {
  const [displayList, setDisplayList] = useState(false);
  //setDisplayList est utilisée pr  maj  la valeur de displayList. 
  //Cet état est utilisé pour contrôler l'affichage de la liste de fruits.
  //par défaut displayList a la valeur false
  //donc on cache la liste

  //fct appelé qd bouton est cliqué
  function onClick() {
    setDisplayList(displayList ? false : true);
    //fct setDisplayList pr inverser la valeur de displayList
    //(true devient false et vice versa) à chaque clique 
    //en utilisant une condition ternaire
  }

  return (
    <div className="App">
      <button onClick={() => onClick()}>Afficher / Masquer</button>

      {/* {displayList && <FruitsMaster />}
      {!displayList && <p>Pas de fruit</p>} */}

      {displayList === true && <FruitsMaster />}
    </div>
  );
}

export default App;
