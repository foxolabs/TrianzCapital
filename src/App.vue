<template>
  <div id="app">
  	<nav class="nav">
      <div class="container">
        <div class="nav-left">
            <router-link to="/" class="image is-96x96">
                  <img src="./assets/logo.png">
            </router-link>
        </div>
    		<div class="nav-center">
    			<div class="nav-item ">
    				<router-link class="lwhite" to="/difference">{{ name }} Difference</router-link>
    			</div>
    			<div class="nav-item ">
    				<router-link class="lwhite" to="/pap">Philosophy & Process</router-link>
    			</div>
    			<div class="nav-item ">
    				<router-link class="lwhite" to="/alternative">Alternative</router-link>
    			</div>
    		</div>
        <div class="nav-right">
            <div class="nav-item">
              <div class="icon"><i class="fa fa-facebook"></i></div>Like
            </div>
            <div class="nav-item">
              <div class="icon"><i class="fa fa-twitter"></i></div>Tweet
            </div>
            <div class="nav-item">
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
            <p class="subtitle"><router-link to="/avendus">{{ name }} Difference</router-link>&ensp;&ensp;<router-link to="/pap">Philosophy & Process</router-link>&ensp;&ensp;<router-link to="/alternative">Alternative Investment</router-link>&ensp;&ensp;<router-link to="/contact">Contact</router-link></p>
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
    mbMenu: function (ev) {
      if(isActive) {
        isActive=false;
      } else {
        isActive=true;
      }
    }
  }
}

</script>

<style scoped>
.subtitle.is-8 {
  font-size: 0.75rem;
}
.nav {
  background: transparent;
  position: absolute;
  width: 100%;
  color: white;
}
.nav a {
    color: white;
}
.nav-item a:not(.button) {
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
@media screen and (max-width: 768px) {
  
}
.lwhite {
  color: white;
}
</style>
