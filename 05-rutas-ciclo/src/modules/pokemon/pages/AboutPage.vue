<template>
  <h1>About Page</h1>
  <h2>{{name}}</h2>
  <hr/>
  <button @click="changeName">
    Change Name
  </button>

</template>

<script>
export default {
  data() {
    return {
      name: 'Luis'
    }
  },
  methods: {
    changeName() {
      this.name = 'Luis Eduardo'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCapture() {
    console.log('errorCapture')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  },
}
</script>