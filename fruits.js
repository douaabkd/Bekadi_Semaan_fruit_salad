import Fruit from '../models/Fruit';

//definition d'une liste de fruit 
const fruits = [
    new Fruit("Citron","#FFCC00"),
    new Fruit("Peche", "#F44336"),
    new Fruit("Fraise", "#E53935"),
];

export default fruits;
//on exporte pr permettre à d'autres modules d'importer 