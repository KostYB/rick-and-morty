<template>
  <nav class="navbar navbar-expand navbar-light">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/img/logo.png" class="d-block navbar-img" alt="">
    </router-link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
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
            <a :href="href" class="nav-link" @click="navigate">{{ link }}</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
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
  .navbar {
    &-light {
      background-color: #e3f2fd;
    }
    &-img {
      max-width: 120px;
    }
  }
</style>
