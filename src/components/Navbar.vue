<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand navbar-light mb-5">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/logo.png" class="d-block navbar-img" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ml-auto">
            <router-link
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              class="nav-item"
              v-for="(link, index) in links"
              :key="index"
              :to="link"
            >
              <li
                :class="[isActive && 'router-link-active' && 'active', isExactActive && 'router-link-exact-active']"
              >
                <a :href="href" class="nav-link text-capitalize" @click="navigate">{{ link }}</a>
              </li>
            </router-link>
          </ul>
        </div>
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
