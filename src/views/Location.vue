<template>
  <div class="location-item">
    <div class="container mb-5">
      <h1 class="mb-4">Location - {{ LOCATION_BY_ID.name }}</h1>
      <div class="location-item__container mb-4">
        <p class="location-item__text mb-2"><b>Type - </b> {{ LOCATION_BY_ID.type }}</p>
        <p class="location-item__text mb-2"><b>Dimension - </b> {{ LOCATION_BY_ID.dimension }}</p>
      </div>
      <div v-if="RESIDENTS.length">
        <h3 class="mb-5">Residents: {{ RESIDENTS.length }}</h3>
        <div class="row mb-2">
          <div
            class="col-md-4 mb-4"
            v-for="resident in RESIDENTS"
            :key="resident.id"
          >
            <router-link tag="div" :to="{ name: 'Character', params: { id: `${resident.id}` } }" class="card location-item__card">
              <img class="card-img-top location-item__img" v-lazy="resident.image" :alt="resident.name">
              <div class="card-body">
                <h5>{{ resident.name }}</h5>
              </div>
            </router-link>

          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="mb-5">Residents: {{ RESIDENTS.length }}</h3>
      </div>
      <a class="btn btn-secondary" @click="$router.go(-1)">Back</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Location',
  computed: {
    ...mapGetters(['LOCATION_BY_ID', 'RESIDENTS'])
  },
  methods: {
    ...mapActions(['GET_LOCATIONS_BY_ID'])
  },
  mounted () {
    this.GET_LOCATIONS_BY_ID(this.$route.params.id)
  }
}
</script>

<style lang="scss">
  .location-item {
    &__card {
      cursor: pointer;
    }
    &__text {
      font-size: 1.24rem;
      line-height: 1.24;
    }
    &__img {
      display: block;
      object-position: center;
      object-fit: cover;
      max-height: 300px;
    }
    b {
      font-weight: bold;
    }
  }
</style>
