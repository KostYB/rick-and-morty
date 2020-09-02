<template>
  <div class="characters container">
    <h1 class="mb-5">Characters</h1>

    <div class="row">
      <div
        class="col-md-6 mb-4 character"
        v-for="character in charactersResult"
        :key="character.id"
      >
        <div class="row no-gutters rounded border border-warning h-100">
          <router-link tag="div" :to="{ name: 'Character', params: { id: `${character.id}` }}" class="col-4 character__picture">
            <img v-lazy="character.image" :alt="character.name" class="character__img">
          </router-link>
          <div class="col-8 p-3 d-flex flex-column">
            <h5 class="mb-3">{{ character.name }}</h5>
            <p class="mb-2">{{ character.status }} - {{ character.species }}</p>
            <router-link :to="{ name: 'Character', params: { id: `${character.id}` }}" class="mt-auto">More</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Characters',
  methods: {
    ...mapActions(['GET_CHARACTER'])
  },
  computed: {
    ...mapGetters(['CHARACTERS']),
    charactersResult () {
      return this.CHARACTERS.results
    }
  },
  mounted () {
    this.GET_CHARACTER()
  }
}
</script>

<style lang="scss">
  .character {
    &__picture {
      position: relative;
      min-height: 150px;
      cursor: pointer;
      user-select: none;
    }
    &__img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
</style>
