<template>
  <div class="not-found-container">
    <h1>Stranica nije pronađena</h1>
    <p>Izgleda da ste došli na stranicu koja ne postoji.</p>
    <router-link to="/" class="back-link">Natrag na početnu</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  text-align: center;
  padding: 50px;
}

h1 {
  color: red;
  font-size: 2rem;
}

p {
  margin: 20px 0;
  color: black
}

.back-link {
  color: #4caf50;
  text-decoration: none;
  font-size: 1.2rem;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
