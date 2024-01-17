<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOption
      :pokemons="pokemonArr" 
      @selection="checkAnswer(1, $event)"
      />
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
    },
    checkAnswer(numero, pokemonId) {
      console.log('Pokemon checked!', numero, pokemonId)
      this.showPokemon = pokemonId === this.pokemon.id
    }
  },
  mounted() {
    this.misPokemonArray()
  }
}
</script>