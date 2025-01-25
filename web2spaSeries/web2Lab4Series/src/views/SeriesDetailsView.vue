<template>
  <div>
    <h1>Detalji o seriji</h1>
    <div v-if="series">
      <h2>{{ series.name }}</h2>
      <p><strong>Žanr:</strong> {{ series.genre }}</p>
      <p><strong>Broj sezona:</strong> {{ series.seasons }}</p>
      <p><strong>Status:</strong> {{ series.watched ? 'Pogledano' : 'Nije pogledano' }}</p>

      <MarkAsWatchedButton v-if="!series.watched" @watched="markAsWatched" />

            <router-link :to="`/edit/${series.id}`">Uredi seriju</router-link>

    </div>
    <div v-else>
      <p>Serija nije pronađena!</p>
    </div>
    <router-link to="/">Natrag na početnu</router-link>
  </div>
</template>

<script>
import { useSeriesStore } from '@/stores/series';
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import MarkAsWatchedButton from '@/components/MarkAsWatched.vue';

export default {
  components: {
    MarkAsWatchedButton,
  },
  setup() {
    const seriesStore = useSeriesStore();
    const route = useRoute();

    const seriesId = computed(() => parseInt(route.params.id));

    const series = computed(() =>
      seriesStore.seriesList.find((s) => s.id === seriesId.value)
    );

    const markAsWatched = () => {
      if (series.value) {
        seriesStore.updateSeriesStatus(seriesId.value, true);
      }
    };

    onMounted(() => {
      seriesStore.fetchSeries();
    });

    return { series, markAsWatched };
  },
};
</script>

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
}

h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  color: #495057;
  margin-bottom: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #218838;
}

router-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

router-link:hover {
  background-color: #0056b3;
}
</style>
