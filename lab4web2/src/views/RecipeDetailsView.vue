<template>
  <div v-if="recipe" class="recipe-details">

    <div class="recipe-details">
      <h1>{{ recipe.title }}</h1>
      <p><strong>Opis:</strong> {{ recipe.description }}</p>
      <h2>Sastojci:</h2>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <router-link to="/">← Povratak na početnu</router-link>
    </div>
  </div>
  <div v-else>
    <p>Recept nije pronađen ili se učitava...</p>
  </div>
</template>

<script>
import { useRecipeStore } from "@/stores/recipeStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const recipeStore = useRecipeStore();
    const route = useRoute();

    const recipe = computed(() => {
      const id = parseInt(route.params.id);
      return recipeStore.recipes.find((r) => r.id === id);
    });

    return {
      recipe,
    };
  },
};
</script>

<style scoped>
.recipe-details {
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
  margin: 5px 0;
}
</style>
