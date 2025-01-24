<template>
  <div class="form-container">
    <h2>Dodaj novi recept</h2>
    <form @submit.prevent="submitRecipe">
      <label for="title">Naziv recepta:</label>
      <input
        id="title"
        type="text"
        v-model="recipeTitle"
        placeholder="Unesite naziv recepta"
        required
      />

      <label for="ingredients">Sastojci:</label>
      <textarea
        id="ingredients"
        v-model="recipeIngredients"
        placeholder="Unesite sastojke, odvojene zarezima"
        required
      ></textarea>

      <label for="description">Opis:</label>
      <textarea
        id="description"
        v-model="recipeDescription"
        placeholder="Unesite opis recepta"
        required
      ></textarea>

      <button type="submit">Dodaj recept</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddRecipeForm",
  emits: ["add-recipe"],
  data() {
    return {
      recipeTitle: "",
      recipeIngredients: "",
      recipeDescription: "",
    };
  },
  methods: {
    submitRecipe() {

      const newRecipe = {
        title: this.recipeTitle,
        ingredients: this.recipeIngredients.split(",").map((i) => i.trim()),
        description: this.recipeDescription,
      };
      this.$emit("add-recipe", newRecipe);


      this.recipeTitle = "";
      this.recipeIngredients = "";
      this.recipeDescription = "";
    },
  },
};
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
form label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}
h2 {
  color: #000;
}
label {
  color: #000;
}
form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
