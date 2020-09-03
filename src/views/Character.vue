<template>
  <div class="character-item">
    <div class="container">
      <h1 class="mb-5"> {{ CHARACTER_BY_ID.name }} </h1>

      <div class="character-item__container mb-4">
        <div class="row no-gutters rounded border border-warning h-100">
          <div class="col character-item__picture">
            <img v-lazy="CHARACTER_BY_ID.image" :alt="CHARACTER_BY_ID.name" class="character-item__img">
          </div>
          <div class="col p-3 d-flex flex-column">
            <p v-if="CHARACTER_BY_ID.status" class="mb-2"><b>Status - </b> {{ CHARACTER_BY_ID.status }}</p>
            <p v-if="CHARACTER_BY_ID.species" class="mb-2"><b>Species - </b> {{ CHARACTER_BY_ID.species }}</p>
            <p v-if="CHARACTER_BY_ID.type" class="mb-2"><b>Type - </b> {{ CHARACTER_BY_ID.type }}</p>
            <p v-if="CHARACTER_BY_ID.gender" class="mb-2"><b>Gender - </b> {{ CHARACTER_BY_ID.gender }}</p>
            <p v-if="{...CHARACTER_BY_ID.origin}.name" class="mb-2"><b>Origin - </b> {{ {...CHARACTER_BY_ID.origin}.name }}</p>
            <p v-if="{...CHARACTER_BY_ID.location}.name" class="mb-2"><b>Location - </b> {{ {...CHARACTER_BY_ID.location}.name }}</p>
          </div>
        </div>
      </div>
      <a class="btn btn-secondary" @click="$router.go(-1)">Back to Characters</a>
      <div class="mb-5"></div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Character',
  computed: {
    ...mapGetters(['CHARACTER_BY_ID'])
  },
  methods: {
    ...mapActions(['GET_CHARACTER_BY_ID'])
  },
  mounted () {
    this.GET_CHARACTER_BY_ID(this.$route.params.id)
  }
}
</script>

<style lang="scss">
.character-item {
  &__container {
    p {
      font-size: 1.24rem;
      line-height: 1.24;
    }
    b {
      font-weight: bold;
    }
  }
  &__picture {
    position: relative;
    width: 300px;
    flex: 0 0 auto;
    min-height: 300px;
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
  @media (max-width: 768px) {
    &__container {
      p {
        font-size: 1rem;
        line-height: 1.24;
      }
    }
    &__picture {
      width: 150px;
      min-height: 150px;
    }
  }
  @media (max-width: 576px) {
    &__picture {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
