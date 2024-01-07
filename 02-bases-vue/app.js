const app = Vue.createApp({
    template: `
    <h1>Hola Mundo</h1>
    <p>{{ 1 +1 }}</p>
    `
})

app.mount('#myApp')