<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br><br>
      <!-- {{posts}} -->
    </p>
    <button @click="postPost">Click Here</button>
  </div>
</template>

<script>
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
  created() {
      this.axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        console.log('Axios Success')
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
        console.log('$httpConfig Success')
      })
      .catch(err => {
        console.log(err);
      });
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
    }
    

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
