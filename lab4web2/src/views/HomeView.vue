<template>
  <div class="home-container">
    <h1>Dobrodošli u aplikaciju za recepte!</h1>
    <p>Pregledajte recepte i otkrijte nešto novo za kuhati.</p>

    <h2>Recepti:</h2>
    <ul v-if="recipes.length > 0">
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link :to="'/recipe/' + recipe.id">{{ recipe.title }}</router-link>
      </li>
    </ul>
    <p v-else>Trenutno nema dostupnih recepata...</p>

    <AddRecipeForm @add-recipe="addRecipeToStore" />
  </div>
</template>

<script>
import { useRecipeStore } from "@/stores/recipeStore";
import AddRecipeForm from "@/components/AddRecipeForm.vue";
import {computed, onMounted } from "vue";

export default {
  components: {
    AddRecipeForm,
  },
  setup() {
    const recipeStore = useRecipeStore();

    const recipes = computed(() => recipeStore.recipes);

    const addRecipeToStore = (newRecipe) => {
      recipeStore.addRecipe(newRecipe);
    };
    onMounted(() => {
      if (!recipeStore.recipes.length) {
        recipeStore.fetchRecipes();
      }
    });
    return {
      recipes,
      addRecipeToStore,
    };
  },
};
</script>

<style scoped>
.home-container {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

ul li a {
  color: #4CAF50;
  text-decoration: none;
}

ul li a:hover {
  text-decoration: underline;
}
</style>
