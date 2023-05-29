import { useState } from "react"; //pr gérer l'état d'un composant fonctionnel
import { useForm } from "react-hook-form"; //facilite la gestion des formulaires
import "./Signup.css";

import User from "../models/User";//classe modèle qui représente un utilisateur 

import axios from "axios"; //bibliothèque HTTP pr faire des requêtes réseau

const axiosInstance = axios.create({
  baseURL: "https://fruits.shrp.dev",
  timeout: 3000,
  headers: {},
});

function Signup() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);  //user par défaut = null

  async function onSubmitSignUpForm(data) {
    //Créer une instance de l'utilisateur avec les données du formulaire
    //fct appelé qd formulaire de création de compte est soumis
    const aUser = new User(
      // crée une instance de User à partir des données du formulaire
      data.firstname,
      data.lastname,
      data.email,
      data.password
    );

    try {
      setLoading(true);
      //Effectuer une requête POST pour créer un utilisateur
      const response = await axiosInstance.post(`/users`, aUser);

      //Vérifier la réponse (si 204 = succès) et maj de l'état de l'utilisateur
      if (response.status === 204) {
        setUser(aUser);
      }
      //Les états loading, error et user st gérés en fct du résultat
      setLoading(false);
      setError(false);
      reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="Signup">
      {loading === false && error === false && user !== null && (
        <p>
          Compte créé pour <b>{`${user.firstname} ${user.lastname}`}</b> (
          {user.email})
        </p>
      )}
      {loading === true && <p>Chargement...</p>}
      {/*messages d'erreur sont affichés si les champs obligatoires ne sont pas remplis  */}
      {error === true && <p>Une erreur s'est produite</p>}
      <form onSubmit={handleSubmit(onSubmitSignUpForm)}>
        <input
          placeholder="Prénom"
          {...register("firstname", { required: true })}
        />
        {errors.firstname && <span>Ce champ est obligatoire</span>}
        {/* Un formulaire est rendu avec des champs de saisie pour 
        le prénom, le nom, l'adresse e-mail et le mot de passe. */}
        <input
          placeholder="Nom"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && <span>Ce champ est obligatoire</span>}

        <input
          placeholder="Adresse mail"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Ce champ est obligatoire</span>}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Ce champ est obligatoire</span>}

        <button type="submit">Création de compte</button>
      </form>
    </div>
  );
}

export default Signup;
