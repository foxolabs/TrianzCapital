<template>
  <div id="app">
  	<nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="image is-96x96">
          <img src="./assets/logo.png">
        </router-link>
        <div class="navbar-burger burger" data-target="navMenuExample" v-on:click="ham" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link class="lwhite" to="/difference">{{ name }} Difference</router-link>
          </div>
          <div class="navbar-item ">
            <router-link class="lwhite" to="/pap">Philosophy & Process</router-link>
          </div>
          <div class="navbar-item ">
            <router-link class="lwhite" to="/alternative">Alternative</router-link>
          </div>
          <div class="navbar-item">
            <div class="icon"><i class="fa fa-facebook"></i></div>Like
          </div>
          <div class="navbar-item">
            <div class="icon"><i class="fa fa-twitter"></i></div>Tweet
          </div>
          <div class="navbar-item">
            <div class="icon"><i class="fa fa-pinterest"></i></div>Share
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">

          <p>
            <span class="icon is-large"><i class="fa fa-facebook"></i></span>&ensp;&ensp;
            <span class="icon is-large"><i class="fa fa-twitter"></i></span>&ensp;&ensp;
            <span class="icon is-large"><i class="fa fa-pinterest"></i></span>&ensp;&ensp;
          </p>
          &ensp;&ensp;
          <br>
          <p class="subtitle"><router-link to="/avendus"><span v-on:click="scroll">{{ name }} Difference</span></router-link>&ensp;&ensp;<router-link to="/pap">Philosophy & Process</router-link>&ensp;&ensp;<router-link to="/alternative">Alternative Investment</router-link>&ensp;&ensp;<router-link to="/contact">Contact</router-link></p>
          <p class="subtitle is-8">Security &ensp; Terms of Use &ensp; Privacy &ensp; Legal & Trademark Notices &ensp; About Us</p>
          <p></p>
          <p class="subtitle is-8"> Bill Payment &ensp; Money Manger &ensp; Sitemap </p>
          <p>&ensp;</p>
          <hr>
          <p class="subtitle is-8">© 2017 {{ name }} Capitals, Inc. All rights reserved.</p>
          <p class="subtitle is-8"> Terms, conditions, feature, availabilty, pricing, fees, service and support options subject to change without notice.</p>
        </div>
      </div> 
    </footer>
  </div>
</template>

<script >
  export default {
    name: 'app',
    data () {
      return {
        name: 'Trianz',
        isActive: false
      }
    },
    methods: {
      scroll: function (ev) {
      },
      ham: function (ev) {
        if(this.isActive) {
          this.isActive=false;
        } else {
          this.isActive=true;
        }

      }
    }
  }

</script>

<style scoped>
  .subtitle.is-8 {
    font-size: 0.75rem;
  }
  .navbar {
    background: transparent;
    position: absolute;
    width: 100%;
    color: white;
  }
  .navbar a {
    color: white;
  }
  .navbar-end {
    margin-top: 1em;
  }
  .navbar-item {
    color: white;
  }
  .footer {
    background:#2d2d2d;
    color: white;
  }
  .footer a{
    color: white;
  }
  p {
    color: white;
  }
  .navbar-brand {
      width: 100%;
  }
  @media screen and (max-width: 768px) {
    .navbar {
      z-index: 2;
    }
    .navbar-item {
      display: block;
      background-color: white;
      color: black;
    }
    .navbar-end {
    margin-top: 0;
  }
    .navbar-item a {
      color: black;
    }
    .is-96x96 {
      width: 62px;
      height: 62px;
    }
    .navbar-menu {
      padding: 0;
    }
  }
  .burger span {
    background-color: white;
  }
  .lwhite {
    color: white;
  }
</style>
