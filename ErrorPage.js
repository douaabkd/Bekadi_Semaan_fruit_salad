// hook(useRouteError) permet de récupérer les informations sur l'erreur de route
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); //récupère les infos sur l'erreur de route et stockage dans la variable error.
  console.error(error); //signaler l'erreur pour déblocage

  //composant retourne une structure HTML qui affiche msg erreur
  return (
    <div id="error-page">
      <h1>Cette page n'existe pas !</h1>
      <p>Désolé, une erreur s'est produite.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
