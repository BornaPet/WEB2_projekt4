<template>
  <div>
    <h1>Uredi seriju</h1>
    <form @submit.prevent="saveSeries">
      <div id="edit">
        <label for="name">Ime serije:</label>
        <input type="text" id="name" v-model="series.name" required />
      </div>

      <div id="edit">
        <label for="genre">Žanr:</label>
        <input type="text" id="genre" v-model="series.genre" required />
      </div>

      <div id="edit">
        <label for="seasons">Broj sezona:</label>
        <input type="number" id="seasons" v-model="series.seasons" required />
      </div>

      <div id="edit">
        <label for="watched">Označi kao pogledano:</label>
        <input type="checkbox" id="watched" v-model="series.watched" />
      </div>

      <button type="submit">Spremi promjene</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'EditSeries',
  data() {
    return {
      series: {
        id: '',
        name: '',
        genre: '',
        seasons: 0,
        watched: false,
      },
    };
  },
  created() {

    const seriesId = this.$route.params.id;
    const seriesData = JSON.parse(localStorage.getItem('seriesList')) || [];
    const foundSeries = seriesData.find(s => s.id == seriesId);

    if (foundSeries) {
      this.series = foundSeries;
    }
  },
  methods: {
    saveSeries() {
      const seriesData = JSON.parse(localStorage.getItem('seriesList')) || [];
      const index = seriesData.findIndex(s => s.id === this.series.id);

      if (index !== -1) {
        seriesData[index] = this.series;
        localStorage.setItem('seriesList', JSON.stringify(seriesData));
        alert('Podaci serije su spremljeni!');
        this.$router.push(`/series/${this.series.id}`);

      } else {
        alert('Serija nije pronađena!');
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: black;
}

label {
  color: black;
}

input, button {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

#edit {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  text-align: center;
}
</style>
