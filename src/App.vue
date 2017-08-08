<template>
  <div id="app">
  	<nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="image is-96x96 is-62">
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
            <router-link class="lwhite" to="/difference"><div v-on:click="sclose">{{ name }} Difference</div></router-link>
          </div>
          <div class="navbar-item ">
            <router-link class="lwhite" to="/pap"><div v-on:click="sclose">Philosophy & Process</div></router-link>
          </div>
          <div class="navbar-item ">
            <router-link class="lwhite" to="/alternative"><div v-on:click="sclose">Alternative</div></router-link>
          </div>
          <div class="navbar-item">
            <div class="icon"><a href="https://www.facebook.com/Trianz-Capital-1564784410252115/"><i class="fa fa-facebook"></i>Like</a></div>
          </div>
          <div class="navbar-item">
            <div class="icon"><a href="https://twitter.com/trianzcapital"><i class="fa fa-twitter"></i>Tweet</a></div>
          </div>
          <div class="navbar-item">
            <div class="icon"><a href="https://in.pinterest.com/trianzcapital/"><i class="fa fa-pinterest"></i>Share</a></div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">

          <p>
            <span class="icon is-large"><a href="https://www.facebook.com/Trianz-Capital-1564784410252115/"><i class="fa fa-facebook"></i></a></span>&ensp;&ensp;
            <span class="icon is-large"><a href="https://twitter.com/trianzcapital"><i class="fa fa-twitter"></i></a></span>&ensp;&ensp;
            <span class="icon is-large"><a href="https://in.pinterest.com/trianzcapital/"><i class="fa fa-pinterest"></i></a></span>&ensp;&ensp;
          </p>
          &ensp;&ensp;
          <br>
          <p class="subtitle">
            <router-link to="/difference"><span v-on:click="() => { scroll(); sclose(); }">{{ name }} Difference</span></router-link>&ensp;&ensp;
            <router-link to="/pap"><span v-on:click="() => { scroll(); sclose(); }">Philosophy & Process</span></router-link>&ensp;&ensp;
            <router-link to="/alternative"><span v-on:click="() => { scroll(); sclose(); }">Alternative Investment</span></router-link>&ensp;&ensp;
            <router-link to="/contact" ><span v-on:click="() => { scroll(); sclose(); }">Contact</span></router-link></p>
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
        window.scrollTo( 0, 0 );
      },
      ham: function (ev) {
        if(this.isActive) {
          this.isActive=false;
        } else {
          this.isActive=true;
        }
      },
      sclose: function (ev) {
        if(this.isActive)
          this.isActive = false;
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
    margin-top: 2em;
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
    .is-62 {
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
