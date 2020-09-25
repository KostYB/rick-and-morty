<template>
  <header class="header">
    <div class="container">
      <nav class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
        <router-link to="/" class="my-0 mr-md-auto font-weight-normal">
          <img src="../assets/img/logo.png" class="d-block navbar-img" alt="">
        </router-link>

        <ul class="my-2 my-md-0 d-sm-flex">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="'/' + link"
            class="text-center text-capitalize text-dark ml-lg-3 mr-lg-0 ml-sm-2 mr-sm-2"
          >
            {{ link }}
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    links: {
      type: Array
    }
  }
}
</script>


<style lang="scss">
  .header {
    background-color: #e3f2fd;
  }
  .navbar {
    &-img {
      max-width: 120px;
    }
  }
</style>
