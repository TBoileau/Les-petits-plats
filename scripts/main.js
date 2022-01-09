const getData = () =>
	fetch('../scripts/data/recipes.json') /* Appeler l'API Fetch */
    .then(response => response.json()) /*  Convertir res en données JSON */
    .then(data => { /* Traiter les données JSON */
      return data;
    })


const generateFilters = (recipes) => {
  let ingredients = [];
  let apparatus = [];
  let ustensils = [];
  recipes.forEach((recipe) => {
    ingredients = [
    ...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
    ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();
    apparatus = [...new Set([...apparatus, ...[recipe.appliance]])].sort();
  });
  return { ingredients, ustensils, apparatus };
};
    

  
const createRecipesCard = (recipes) => {
    recipes.forEach((recipe) => {
      recipesSection.append(new RecipeCard(recipe).recipeCard);
    });
   
  };

  const init = async () => {
    
  const { recipes } = await getData();
    
  createRecipesCard(recipes)
  listenOnInputs(recipes);
};
  
init();

  
