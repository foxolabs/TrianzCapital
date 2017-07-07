<template>
  <div class="alternative">
    <section class="hero is-medium has-text-centered top">
      <div class="hero-body">
        <div class="container">
          <div class="title is-2 lwhite">Alternative Investment</div>
          <br>
          <div class="subtitle is-6 lwhite">Under Alternative Investments, Trianz Capital has invested in private equity, real estate, start-ups, commodities and precious metals, financial transactions.</div>
        </div>
      </div>
    </section>
    <section class="hero is-medium has-text-centered grey">
      <div class="hero-body">
        <div class="container">
          <p class="title a aTitle is-4"> {{ name }} Capital Alternative Investments </p>
          <br>
          <p class="subtitle is-6"> Why Trianz uses Alternative investments statergy: Alternative investments typically have a low correlation with those of standard asset classes, which makes them suitable for portfolio diversification. </p>
          <p class="subtitle is-6"> Investments in hard assets such as gold and oil also provide  an effective hedge against rising infaltion, as they are negatively correlated with performance of stocks and bonds</p>
        </div>
      </div>
    </section>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="title aTitle is-4">
            Trianz Alternative Investments 
          </p>
          <ol>
          <li class="subtitle is-6">
            Direct Investments in start-ups: This is a high risk and high return for investors as many start-ups end up failing. A private company will seek investors through a provate placement based on a certain valuation.
          </li>
          <li class="subtitle is-6">Our real asstes or physical Assets investments include those that have intrinsic value such as real estate, precious metal commodities and agriculture land.</li>
          <li class="subtitle is-6">
            Trianz Capital does collective buying and collective farming as a part of its real estate alternative investments where we have invested in US, India and China. Our investments are planned in Europe.
          </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'alternative',
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
  .top {
    background: url('../assets/90.png');
    background-size: cover;
  }
  .aTitle {
    color: #c50404;
  }
  .subtitle {
    line-height: 1.7em;
  }
  .grey {
    background-color: #f5f5f5;
  }
  li {
    text-align: left;
  }
  .lwhite {
    color: white;
  }
</style>
