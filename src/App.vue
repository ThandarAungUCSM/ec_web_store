<template>
    <div>
        <router-view/>
    </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  data() {
    return {
        testStore: useStore
    }
  },
  created() {
    // console.log(this.testStore.state.count)
  }
}
</script>

<style lang="less">
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 30px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    } 

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-weight: 400;
    }

    .app {
      min-height: 100vh;
      position: relative;
      background-color: #f1f1f1;
    }

    .container {
      padding: 0 20px;
      max-width: 1140px;
      margin: 0 auto;
    }
</style>
