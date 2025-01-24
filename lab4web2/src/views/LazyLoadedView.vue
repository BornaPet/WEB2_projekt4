<template>
  <div class="lazy-loaded">
    <h1>Lazy Loaded Komponenta</h1>
    <p>Ova komponenta je učitana samo kad korisnik posjeti ovu stranicu!</p>
  </div>
</template>

<script>
export default {
  name: "LazyLoadedView",
};
</script>

<style scoped>
.lazy-loaded {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}
</style>
