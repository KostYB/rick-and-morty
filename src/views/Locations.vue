<template>
  <div class="locations">
    <div class="container">
      <h1 class="mb-5">Locations</h1>



        <table class="table table-striped mb-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
              <th>Residents</th>
            </tr>
          </thead>
          <tbody>
            <router-link tag="tr" :to="{ name: 'Location', params: { id: `${location.id}` }}"
              v-for="location in locationsResult"
              :key="location.id"
            >
              <th scope="row">{{ location.id }}</th>
              <td>{{ location.name }}</td>
              <td>{{ location.type }}</td>
              <td>{{ location.dimension }}</td>
              <td>{{ location.residents.length }}</td>
            </router-link>
          </tbody>
        </table>

        <paginate
          v-model="page"
          :page-count="Number(locationsInfo.pages)"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Paginate from 'vuejs-paginate'

export default {
  name: 'Locations',
  data () {
    return {
      page: 1
    }
  },
  components: {
    Paginate
  },
  methods: {
    ...mapActions(['GET_LOCATIONS']),
    paginateCallback (pageNum) {
      const vm = this
      this.GET_LOCATIONS(pageNum)
      this.$router.push({ name: 'Locations', params: { id: `${pageNum}` } }, () => {})
    }
  },
  computed: {
    ...mapGetters(['LOCATIONS']),
    locationsResult () {
      return { ...this.LOCATIONS.results }
    },
    locationsInfo () {
      return { ...this.LOCATIONS.info }
    }
  },
  mounted () {
    this.GET_LOCATIONS()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const pageNumber = Number(vm.$route.params.id)
      vm.GET_LOCATIONS(pageNumber)
      vm.page = pageNumber
    })
  }
}
</script>

<style lang="scss">

</style>
