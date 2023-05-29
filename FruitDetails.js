import { useEffect, useState } from "react";
import Fruit from "../models/Fruit";
import { useParams } from "react-router-dom";
import "./FruitDetails.css"; //style

import axios from "axios"; //biblio pr  envoyer une requête à l'API des fruits et récupérer les détails d'un fruit spécifique.

const axiosInstance = axios.create({
  baseURL: "https://fruits.shrp.dev", //url de base des requête
  timeout: 1000, //delai d'attente
  headers: {},
});

function FruitDetails() {
  const { fruitName } = useParams(); //
  //récupère le  nom du fruit en minuscules dans l'URI ex: fruits/:fruitName -> fruits/cerise

  //déclarations
  const [fruit, setFruit] = useState(null); //déclare un état fruit et c null psq on a pas encore récupérer les détails du fruit
  const [loading, setLoading] = useState(false); // false = chargement pas en cours
  const [error, setError] = useState(false);// si ya une erreur ou non et false = pas d'erreur pr le moment

  useEffect(() => {
    async function fetchAPI() {
      try {
        const nameWithFirstLetterUppercase =
          fruitName.charAt(0).toUpperCase() + fruitName.slice(1);
          //Convertit la première lettre du fruitName en majuscule
        
        setLoading(true);
        // maj de l'état loading à true, indiquant que le chargement des données est en cours.

        const response = await axiosInstance.get(
          `/items/fruits?fields=*.*&filter[name][_eq]=${nameWithFirstLetterUppercase}`
        );
        // Effectue une requête GET à l'API pour récupérer les détails du fruit en utilisant l'instance d'axios 
    
        const jsonData = response.data.data[0];
        // Récupère les données du fruit de la réponse de l'API


        const aFruit = new Fruit(
          jsonData.name,
          jsonData.color,
          jsonData.image,
          jsonData.id,
          jsonData.price,
          jsonData.stock,
          jsonData.origin.name,
          jsonData.season
        );
        // Crée une nouvelle instance de la classe Fruit avec les données récupérées de l'API

        setFruit(aFruit);
        // Maj état 'fruit' avec l'instance du fruit créée précédement 

        setLoading(false);
        setError(false);
        // indique que le chargement est terminé et qu'il n'y a pas d'erreur.
      } catch (error) {
        //capture les erreurs qui se produisent lors de la requête à l'API
        console.log(error);
        // Affiche l'erreur dans la console

        setLoading(false);
        // MAJ l'état en false
        setError(true);
        // Définit l'état d'erreur à true
      }
    }

    fetchAPI();
    // Appelle la fonction fetchAPI pour récupérer les données du fruit
  }, [fruitName]);

  function getImage() {
    return "/images/" + fruit.name.toLowerCase() + ".png";
    // Retourne le chemin de l'image du fruit en utilisant le nom du fruit en minuscules

  }

  return (
    <>
      {loading === true && <p>Chargement...</p>}
      {error === true && <p>Une erreur s'est produite :(</p>}
      {fruit !== null && (
        <>
          <h1>{fruit.name}</h1>
          <img width="100px" alt={fruit.name} src={getImage()} />
          <p>Origine : {fruit.origin}</p>
          <p>Saison : {fruit.season}</p>
          <p>Prix : {fruit.price} €</p>
          <p>Stock : {fruit.stock}</p>
        </>
      )}
      <a href="/">Retour</a>
    </>
  );
}

export default FruitDetails;
