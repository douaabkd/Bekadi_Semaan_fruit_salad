class Fruit{
    //Le constructeur de la classe Fruit est défini avec des params pr chaque propriété du fruit.
    //Les params ont des valeurs par défaut au cas où aucune valeur n'est fournie lors de la création de l'objet.
    //si aucun nom fourni, nom du fruit= chaîne vide par défaut.
    //Chaque propriété est initialisée avec la valeur correspondante passée en paramètre.
        constructor(name="", color="#FFFFFF", image=null,  id=0,price=0, stock=0, origin="France", season=null) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.color = color;
        this.stock = stock;
        this.origin = origin;
        this.season = season;
    }
}

export default Fruit;