<template>
  <div id="app">
  	<nav class="nav">
        <div class="nav-left">
            <div class="nav-item">
                <router-link to="/">Home</router-link>
            </div>
        </div>

	  	<span for="menu-toggle" class="nav-toggle">
	      <span></span>
	      <span></span>
	      <span></span>
	    </span>
  		<div class="nav-right nav-menu">
  			<div class="nav-item ">
  				<router-link to="/avendus">Avendus Difference</router-link>
  			</div>
  			<div class="nav-item ">
  				<router-link to="/pap">Philosophy & Process</router-link>
  			</div>
  			<div class="nav-item ">
  				<router-link to="/alternative">Alternative</router-link>
  			</div>
  			<div class="nav-item ">
  				<router-link to="">Insights</router-link>
  			</div>
  			<div class="nav-item ">
  				<router-link to="">Investors</router-link>
  			</div>
  		</div>
	</nav>
    <router-view></router-view>
    <footer class="footer">
        <div class="container has-text-centered">
            <p class="subtitle"><router-link to="/avendus">{{ name }} Difference</router-link>&ensp;&ensp;<router-link to="/pap">Philosophy & Process</router-link>&ensp;&ensp;<router-link to="/alternative">Alternative</router-link>&ensp;&ensp;<router-link to="/contact">Contact</router-link></p>
            <p>Security &ensp; Terms of Use &ensp; Privacy &ensp; Legal & Trademark Notices &ensp; About Us</p>
            <p>&ensp;</p>
            <p>&ensp;</p>
            <p>&ensp;</p>
            <p>&ensp;</p>
            <p>© 2017 {{ name }} Capitals, Inc. All rights reserved.</p>
            <p> Terms, conditions, feature, availabilty, pricing, fees, service and support options subject to change without notice.</p>
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

<style lang='scss' scoped>

.nav {
    position: absolute;
    width: 100%;
    background:rgba(0, 0, 0, 0);
    height: 10em;
}
.nav-item a, a.nav-item {
    color: #fefefe;
}
.nav-toggle {
    color: #fefefe;
    margin-top: 3em;
}

footer.footer {
    background: #2d2d2d;
    color: white;
}
.top {
  height: 30em;
  background: grey;
}
// @import "~/bulma/sass/utilities/_all"

</style>
