<script>
import { useSeriesStore } from '@/stores/series';
import { onMounted } from 'vue';

export default {
  setup() {
    const seriesStore = useSeriesStore();

    onMounted(() => {
      seriesStore.fetchSeries();
    });

    return { seriesStore };
  },
};
</script>

<template>
  <div>
    <h1>Serije</h1>
    <ul>
      <li v-for="series in seriesStore.seriesList" :key="series.id">
        <router-link :to="`/series/${series.id}`">{{ series.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
