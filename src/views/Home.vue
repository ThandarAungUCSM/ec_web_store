<template>
  <div class="home">
    <Header></Header>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{testingItems}}<br><br>
    {{teststateItem}}<br><br>
    {{testingItem}}<br><br>
    {{$store.state.count}}
    <button @click="getTesting('1')">click Action</button> -->
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
import { mapState, mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header
  },
  computed: {
    ...mapState({
      testingItem: state => state.testingStore.testingItem ? state.testingStore.testingItem : 'data null'
    }),
    ...mapGetters([
      'testingItems',
      // 'testingItemById'
    ]),
    teststateItem() {
      return this.$store.state.testingStore.testingItem;
    }
  },
  created() {
      this.$store.dispatch("getTestings")
      this.$store.dispatch("getTesting", '1').then(res => {
          console.log(res)
      })
  },
  methods: {
      ...mapActions(["getTesting"])
  }
}
</script>
