<template>
    <h1>Counter vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <!-- <button @click="incrementRandomInt">Random</button> -->
    <button @click="randomInt" :disabled="isLoading">Random</button>
    <!-- <button @click="$store.dispatch('incrementRandomInt')">Random</button> no recomendado -->

    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>mapState: {{ lastMutation }}</h2>

    <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    // computed: mapState(['count'])
    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        //     lastMutation: 'lastMutation'
        // })
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy(value) {
            this.$store.commit('incrementBy', value)
            // this.randomInt()
        },
        // incrementRandomInt() {
        //     this.$store.dispatch('incrementRandomInt')
        // }
        // ...mapActions(['incrementRandomInt'])
        ...mapActions({
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>