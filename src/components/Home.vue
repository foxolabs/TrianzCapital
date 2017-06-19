<template>
  <div id="home">
    <div class="hero is-large top"></div>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="title aTile"> {{ name }} Capital</p>
          <p class="subtitle"> Been in operations since 1964 for 53 years now. Time tested approach to Emerging Markets Investing - Our investsments in Indian and Chinese markets extends beyond 50 yeards. We started investing in India in 1964, in China 1989 and in Brazil in 1998</p>
        </div>
      </div>
    </section>
    
    <div class="columns has-text-centered">
      <div class="column vint">
        <div class="title">
          Value Investing
        </div>
        <div class="subtitle">
          Value Investing is an investment strategy where stocks are selected that trade for less than thier intrinsic values, Value investors activley seek stocks the believe the market has undervalued
        </div>
      </div>
      <div class="column">
        <div class="title">
          Global Equities
        </div>
        <div class="subtitle">
          The securities traded in the quity market can be either public sticks which are those listed on the stock exchange, or provately traded stocks. Often, private stocks are traded through dealers, which is definition of an over-the counter market.
        </div>
      </div>
      <div class="column">
        <div class="title">Emerging Markets</div>
        <div class="subtitle">An emergency market is a country that has characterstics of a deveped market but does not meet standard to be a developed market. ... The "frontier market" is used for developing countries with slower economies then 'emerging'</div>
      </div>
      <div class="column">
        <div class="title">Alternative Investing</div>
        <div class="subtitle"> An alternative investment is an asset that is on of the conventional investment types, such as stocks, bonds and cash. ... Alternative investment inlcude provate equity, hedge finds, manged futures, real estate, commodities and derivatives contracts</div>
      </div>
    </div>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="title aTile"> {{ name }} Capital</p>
          <p class="subtitle"> Been in operations since 1964 for 53 years now. Time tested approach to Emerging Markets Investing - Our investsments in Indian and Chinese markets extends beyond 50 yeards. We started investing in India in 1964, in China 1989 and in Brazil in 1998</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: 'Trianz'
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
.aTile {
  color: #c50404
}
.top {
  height: 30em;
  background: grey;
}
</style>
