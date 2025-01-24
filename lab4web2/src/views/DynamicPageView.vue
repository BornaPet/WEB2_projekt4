<template>
  <div>
    <h1>Dinamična stranica</h1>
    <p>Trenutni ID: {{ id }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id; // Dinamički parametar iz URL-a

    return { id };
  },
};
</script>
