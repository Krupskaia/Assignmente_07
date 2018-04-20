/*eslint-env browser*/

var RecipeCard = function (title, servings, ingredients) {
    "use strict";
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
    this.displayRecipeCard = function (title, servings, ingredients) {
        var str;
        var i;
        str = title + "\n";
        str = str + "Serves: " + servings + "\n"
        for (i = 0; i < ingredients.length; i += 1) {
            str = str + "-" + ingredients[i] + "\n";
        }
        return str;
    };
};

var myRecipe = new RecipeCard("Guacamole", "4", ["3 Avocados", "1 Lime"]);
window.console.log(myRecipe.displayRecipeCard("Guacamole", "4", ["3 Avocados", "1 Lime"]));