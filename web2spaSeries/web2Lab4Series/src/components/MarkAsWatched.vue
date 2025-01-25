<template>
  <button @click="markAsWatched">Označi kao pogledano</button>
</template>

<script>
export default {
  emits: ['watched'],
  methods: {
    markAsWatched() {
      this.$emit('watched');
    },
  },
};
</script>
