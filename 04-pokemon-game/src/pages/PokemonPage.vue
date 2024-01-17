<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOption
      :pokemons="pokemonArr" 
      @selection="checkAnswer(1, $event)"
      />

    <template v-if="showAnswer">
      <h2>{{message}}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>

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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async misPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(numero, pokemonId) {
      this.showPokemon = this.showAnswer = true

      if(pokemonId === this.pokemon.id){
        this.message = `Correcto!!!"`
      }else {
        this.message = `Opps era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr = []
      this.showPokemon = this.showAnswer = false
      this.message = ''
      this.pokemon = null

      this.misPokemonArray()
    }
  },
  mounted() {
    this.misPokemonArray()
  }
}
</script>