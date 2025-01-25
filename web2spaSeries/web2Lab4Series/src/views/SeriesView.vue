<script>
import { useSeriesStore } from '@/stores/series';
import { onMounted, computed } from 'vue';

export default {
  setup() {
    const seriesStore = useSeriesStore();

    onMounted(() => {
      seriesStore.fetchSeries();
    });
    const watchedSeriesCount = computed(() => {
      return seriesStore.seriesList.filter(series => series.watched).length;
    });
    return { seriesStore, watchedSeriesCount };
  },
};
</script>

<template>
  <div>
    <h1>Serije</h1>
    <p>Broj pogledanih serija: {{ watchedSeriesCount }}</p>

    <ul>
      <li v-for="series in seriesStore.seriesList" :key="series.id">
        <router-link :to="`/series/${series.id}`">{{ series.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f8f9fa;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 2rem;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  background-color: #ffffff;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

router-link {
  font-size: 1.125rem;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

router-link:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
