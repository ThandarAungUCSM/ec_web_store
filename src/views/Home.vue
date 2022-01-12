<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{productItems}}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/brandList">Brands</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters([
      'productItems'
    ])
  },
  created() {
    this.$store.dispatch("getProducts")
  }
}
</script>
