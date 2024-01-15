<template>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="6" :showPokemon="false" />
    <PokemonOption />
</template>

<script>
import PokemonOption from '@/components/PokemonOption.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
  components: { PokemonPicture, PokemonOption },
}
</script>