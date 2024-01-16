<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOption :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonOption from '@/components/PokemonOption.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
  components: { PokemonPicture, PokemonOption },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async misPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonArr[rndInt]
    }
  },
  mounted() {
    this.misPokemonArray()
  }
}
</script>