<!-- GreetingButton.vue -->
<template>
  <button @click="sendGreeting">Pozdravi me!</button>
</template>

<script>
export default {
  name: "GreetingButton",
  methods: {
    sendGreeting() {
      // Emitira event 'greet' prema roditeljskoj komponenti
      this.$emit("greet");
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
