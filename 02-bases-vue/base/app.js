const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>{{ 1 +1 }}</p>
    // `
    data() {
        return {
            quote: `I'm batman`,
            author: '-Batman'
        }
    },
    methods: {
        changeQuote() {
            this.author = "Luis Velandia";
            this.capitalize();
        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        }
    }
})

app.mount('#myApp')