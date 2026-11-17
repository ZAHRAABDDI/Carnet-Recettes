
const listeRecettes = document.getElementById("liste-recettes");
const compteur = document.querySelector("#compteur");
compteur.className = "bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg";
 

function afficherRecettes(recettes) {
    compteur.textContent = `${recettes.length} Recettes`;
    recettes.forEach((recette) => {

        const carte = document.createElement("div");
        carte.className = "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300";

        const imageRecette = document.createElement("img");
        imageRecette.src = recette.image;
        imageRecette.alt = recette.name;
        imageRecette.className = "w-full h-56 object-cover";

        const details = document.createElement("div");
        details.className = "p-5";

        const titreRecette = document.createElement("h3");
        titreRecette.textContent = recette.name;
        titreRecette.className = "text-xl font-bold text-black mb-3";

        const cuisine = document.createElement("p");
        cuisine.textContent = `Cuisine : ${recette.cuisine}`;
        cuisine.className = "text-gray-600 mb-2";

        const difficulty = document.createElement("p");
        difficulty.textContent = `Difficulté : ${recette.difficulty}`;
        difficulty.className = "text-gray-600 mb-2";

        const tempsPreparation = document.createElement("p");
        tempsPreparation.textContent = `Temps de préparation : ${recette.prepTimeMinutes} min`;
        tempsPreparation.className = "text-orange-600 font-semibold";

        details.appendChild(titreRecette);
        details.appendChild(cuisine);
        details.appendChild(difficulty);
        details.appendChild(tempsPreparation);

        carte.appendChild(imageRecette);
        carte.appendChild(details);

        listeRecettes.appendChild(carte);
    });
}
export { afficherRecettes };
