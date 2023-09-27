
document.getElementById("Form").addEventListener("submit", function (event) {
    //Dans cet exemple, nous ajoutons un gestionnaire d'événements à l'élément de formulaire 
    //avec l'ID "Form" et écoutons l'événement "submit". Lorsque le formulaire est soumis 
    //(l'utilisateur clique sur le bouton "Valider"), le gestionnaire d'événements est déclenché.
    // Nous utilisons event.preventDefault() pour empêcher le comportement par défaut du formulaire 
    //(l'envoi de la page).
    event.preventDefault();

    // (Récupérer la valeur du champ de texte)
    //Ensuite, nous utilisons document.getElementById("nom").value pour récupérer la valeur du champ de texte 
    //avec l'ID "nom". Vous pouvez ensuite effectuer différentes actions avec cette valeur, comme l'afficher 
    //dans une alerte ou l'envoyer à un serveur.
    const tachesSaisie = document.getElementById("tachesSaisie").value;

    // Faire quelque chose avec la valeur, par exemple, l'afficher dans la console
    console.log(tachesSaisie);

     // Créez un nouvel élément li
     const nouvelElementLi = document.createElement("li");

     // Ajoutez la valeur du champ de texte à l'élément li
     nouvelElementLi.textContent = tachesSaisie;

     // Sélectionnez la liste ul et ajoutez l'élément li à celle-ci
     const tachesListe = document.getElementById("tachesListe");
     tachesListe.appendChild(nouvelElementLi);

     // Effacez le champ de texte après soumission
     document.getElementById("tachesSaisie").value = "";

    // Vous pouvez également envoyer la valeur à un serveur ici ou effectuer d'autres actions.

});