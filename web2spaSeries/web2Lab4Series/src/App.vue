<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

    <nav>
      <RouterLink to="/" class="nav-link">Početna</RouterLink>
      <RouterLink to="/series" class="nav-link">Serije</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2025 - Tvoja stranica za serije</p>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header .logo {
  height: 50px;
}

nav {
  display: flex;
  gap: 1rem;
}
h1 {
  color: black;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #3a3f47;
}

main {
  padding: 2rem;
  min-height: calc(100vh - 160px);
  background-color: #f8f9fa;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
  font-size: 0.875rem;
}
</style>
