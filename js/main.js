
import { getRecipes, rechercherRecettes } from "./api.js";
import { afficherRecettes } from "./affichage.js";

getRecipes().then(data => {
    afficherRecettes(data.recipes)
});

const formRechercher =document.querySelector("#form-recherche");
const inputRechercher=document.querySelector("#recherche");
const listeRecettes = document.querySelector("#liste-recettes");

formRechercher.addEventListener("submit",async(event)=>{
    event.preventDefault();

    const motCle = inputRechercher.value.trim();
    const data = await rechercherRecettes(motCle);
    const recettes = data.recipes;
    afficherRecettes(recettes);
});

listeRecettes.addEventListener("click", (event) => {
    if (event.target.id ==="btn-toutes-recettes"){
        getRecipes().then(data => {
    afficherRecettes(data.recipes);
});
    }
});

