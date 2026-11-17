
import { getRecipes } from "./api.js";
import { afficherRecettes } from "./affichage.js";

getRecipes().then(data => {
    afficherRecettes(data.recipes)
});

