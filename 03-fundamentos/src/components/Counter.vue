<template>
  <h2>{{title || 'Counter'}}</h2>
  <h2>{{customTitle}} - {{start}}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <button @click="decrease">-1</button>
  <button @click="update(-1)">-1</button>
  <button @click="increase">+1</button>
  <button @click="update(+1)">+1</button>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 1,
      validator(value) {
        return value >= 0
      }
      // required: true
    }
  },
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    getSqureValue() {
      return this.counter * this.counter
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
    update(value) {
      this.counter += value
    }
  },
  computed: {
    squareCounter() {
      return this.counter*this.counter
    },
    customTitle() {
      return this.title || "Counter"
    }
  }
}
</script>

<style>

button {
  background-color: #64B6B7;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button: hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}

</style>