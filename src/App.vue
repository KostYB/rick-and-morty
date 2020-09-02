<template>
  <div id="app">
    <navbar
      :links="links"
    />
    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'Main',
  data () {
    return {
      links: ['characters', 'locations', 'episodes']
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
