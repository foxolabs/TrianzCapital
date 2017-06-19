<template>
  <div class="alternative">
  <div class="hero is-large top"></div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'alternative',
  data () {
    return {
      msg: 'This is alternative'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: black;
}
.top {
  height: 30em;
  background: grey;
}

</style>
