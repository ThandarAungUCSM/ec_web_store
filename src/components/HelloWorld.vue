<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br><br>
      <!-- {{posts}} -->
    </p>
    <button @click="postPost">Click Here</button> <br>
    <!-- {{item}} <br> -->
    <!-- hello-{{items}} <br>
    world-{{teststateItem}} -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      posts: [],
      errdata: []
    };
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      // item: state => state.testingStoreFiles.item ? state.testingStoreFiles.item : 'data null', // testingStoreFiles is module name
      items: state => state.testingStoreFiles.items ? state.testingStoreFiles.items : 'data null'
    }),
    teststateItem() {
      return this.$store.state.testingStoreFiles.items;
    }
  },
  created() {
      this.axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errdata.push(e)
      })
      ,
      ///////////////////////////////////////////////////////////////
      this.axios.get(
        this.$httpConfig.testingAPI
      )
      .then(res => {
        this.posts = res.data
      })
      .catch(err => {
        console.log(err);
      });
      //////////////////////////////////////////////////////////////

      this.$store.dispatch('testingStoreFiles/getTestingsFiles').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

      this.$store.dispatch("testingStoreFiles/getTestingFiles", '1').then(res => {
          console.log(res)
      })
  }, 
  methods: {
    postPost() {
      this.axios.post(this.$httpConfig.testPost, {
        body: 'hello'
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
      //////////////////////////////////////////////////////////////
      this.$HTTP(this.$httpConfig.testPost,{body: 'world'}, 'post').then((res) => {
          console.log(res)
      }).catch((err) => {
          console.log(err)
      })
    },
    /////////////////////////////////////////////

    ...mapActions(["getTestingsFiles"])
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
