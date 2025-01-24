import { defineStore } from "pinia";
import axios from "axios";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [],
  }),
  actions: {
    async fetchRecipes() {
      try {
        const response = await axios.get("https://run.mocky.io/v3/d512cd61-62fd-4a76-b8a0-80f297fcfdaa");
        this.recipes = response.data;
      } catch (error) {
        console.error("Greška prilikom dohvaćanja recepata:", error);
      }
    },
    addRecipe(recipe) {
      const newId = this.recipes.length ? this.recipes[this.recipes.length - 1].id + 1 : 1;
      const newRecipe = { id: newId, ...recipe };

      axios
      .post("https://run.mocky.io/v3/d512cd61-62fd-4a76-b8a0-80f297fcfdaa", newRecipe)
      .then(() => {
        this.recipes.push(newRecipe);
      })
      .catch((error) => console.error("Greška prilikom spremanja recepta:", error));
      },
  },
});
