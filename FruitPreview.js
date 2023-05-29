import "./FruitPreview.css";

function FruitPreview({ fruit }) {
  // Fonction appelée lors du clic sur le bouton
  function onClick() {
    console.log(fruit.name);
  }

// Fonction pour obtenir le chemin de l'image du fruit
  function getImage() {
    return "/images/" + fruit.name.toLowerCase() + ".png";
  }

  // Rendu JSX du composant
  return (
    <div className={"FruitPreview " + fruit.name.toLowerCase()}>
      <a href={"/fruits/" + fruit.name.toLowerCase()} rel="">
        <img alt={fruit.name} src={getImage()} />
      </a>
      <button onClick={() => onClick()}>{fruit.name}</button>
    </div>
  );
}

export default FruitPreview;
