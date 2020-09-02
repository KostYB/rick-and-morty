<template>
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(catalogItem, index) in catalog"
          :key="index"
        >
          <div class="card">
            <img v-lazy="catalogItem.src" class="card-img-top catalog-img" :alt="catalogItem.title">
            <div class="card-body">
              <h5 class="card-title">{{ catalogItem.title }}</h5>
              <router-link :to="catalogItem.link" class="btn btn-secondary">Перейти</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Main',
  data () {
    return {
      catalog: [
        {
          title: 'Characters',
          src: require(`${'@/assets/img/charachers.jpg'}`),
          link: '/characters'
        },
        {
          title: 'Locations',
          src: require(`${'@/assets/img/locations.jpg'}`),
          link: '/locations'
        },
        {
          title: 'Episodes',
          src: require(`${'@/assets/img/episodes.jpg'}`),
          link: '/episodes'
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
  .catalog {
    &-img {
      max-width: 100%;
      height: 348px;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
