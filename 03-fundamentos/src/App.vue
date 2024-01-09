<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <Counter v-bind:start="5" />
  <Counter :start="-1" />
  <Counter/> -->
  <Indecision />
</template>

<script>
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  components: {
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
