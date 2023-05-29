class User {
  static CUSTOMER_ROLE_ID = "ca2c1507-d542-4f47-bb63-a9c44a536498";

  // La propriété statique CUSTOMER_ROLE_ID est définie avec une valeur constante représentant l'ID du rôle client.

  constructor(firstname, lastname, email, password, id = null) {
    // Le constructeur de la classe User est défini avec des paramètres pr chaque propriété de l'utilisateur.
    // L'ID = valeur par défaut = null si aucune valeur n'est fournie lors de la création de l'objet.
    // Chaque propriété est initialisée avec la valeur correspondante passée en paramètre.
  
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.id = id;
    this.role = User.CUSTOMER_ROLE_ID; //customer role
  }
}

export default User;
