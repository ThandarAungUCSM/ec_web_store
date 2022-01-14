<template>
  <div class="headerCss">
      <header>
        <nav>
          <div class="">
              <img alt="web store logo" src="../assets/header/logo.png">
          </div>
          <div>
              hello
          </div>
        </nav>
      </header>
  </div>
</template>

<script>
export default {
  name: "headername",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>
<style lang="less">
  .headerCss {
    background: #F9F8F8;
    background: gray;
    .headerdiv {
      width: 1043px;
      background: orange;
      margin: 0 auto;
    }
  }

  header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #fff;
    nav {
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: .5s ease all;
      width: 90%;
      margin: 0 auto;

    }
  }

  @media screen and (max-width: 1366px) and (min-width: 768px)  {
      .container {
          width: 100%;
          max-width: 100%;
      }
      
  }
</style>