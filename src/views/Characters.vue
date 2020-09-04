<template>
  <div class="characters container">
    <h1 class="mb-5">Characters</h1>

    <div class="row mb-5">
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
    <paginate
      v-model="page"
      :page-count="Number(charactersInfo.pages)"
      :page-range="3"
      :margin-pages="2"
      :click-handler="paginateCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
      >
    </paginate>
    <div class="mb-5"></div>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Paginate from 'vuejs-paginate'

export default {
  name: 'Characters',
  components: {
    Paginate
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    ...mapActions(['GET_CHARACTERS']),
    paginateCallback (pageNum) {
      const vm = this
      this.GET_CHARACTERS(pageNum)
      this.$router.push({ name: 'Characters', params: { id: `${pageNum}` } }, () => {})
    }
  },
  computed: {
    ...mapGetters(['CHARACTERS']),
    charactersResult () {
      return this.CHARACTERS.results
    },
    charactersInfo () {
      return { ...this.CHARACTERS.info }
    }
  },
  mounted () {
    this.GET_CHARACTERS()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const pageNumber = Number(vm.$route.params.id)
      vm.GET_CHARACTERS(pageNumber)
      vm.page = pageNumber
    })
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
