<template>
    <h1>Pokemon Page <span>{{$route.params.id}}</span></h1>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // id: this.$route.params.id
        }
    },

    create() {
        // console.log(this.$route)
        // const { id } = this.$route.params
        // console.log(id)
        // this.id = id
        console.log(this.$attrs)
    }
}
</script>