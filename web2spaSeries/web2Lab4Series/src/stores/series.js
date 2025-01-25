import { defineStore } from 'pinia';

export const useSeriesStore = defineStore('series', {
  state: () => ({
    seriesList: [],
  }),
  actions: {
    async fetchSeries() {
      const localData = localStorage.getItem('seriesList');
      if (localData) {
        this.seriesList = JSON.parse(localData);
      } else {
        const response = await fetch('https://run.mocky.io/v3/22f9db89-37af-47da-b78c-33330b8758f5');
        this.seriesList = await response.json();
        localStorage.setItem('seriesList', JSON.stringify(this.seriesList));
      }
    },

    updateSeriesStatus(id, watched) {
      const series = this.seriesList.find((s) => s.id === id);
      if (series) {
        series.watched = watched;
        localStorage.setItem('seriesList', JSON.stringify(this.seriesList));
      }
    },
  },
});
