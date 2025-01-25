<template>
  <section class="home">
    <h1>Dobrodošli na stranicu za serije!</h1>
    <p>Ovdje možete pregledati serije i označiti što ste pogledali.</p>
    <router-link to="/series" class="btn">Pregled serija</router-link>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

h1 {
color: #343a40;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
color: #6c757d;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
