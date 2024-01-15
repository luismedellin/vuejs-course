<template>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture />
    <PokemonOption />
</template>

<script>
import PokemonOption from '@/components/PokemonOption.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

export default {
  components: { PokemonPicture, PokemonOption },
}
</script>