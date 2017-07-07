<template>
  <div id="home">
    <section class="hero is-large has-text-centered">
      <div class="hero-body top mul">
        <div class="container">
          <p class="title is-2"> Its all comming together</p>
          <p></p>
          <p class="subtitle">When you're on top your monry, life is good. We help you effortlessly manage your finance in one place</p>
        </div>
      </div>
    </section>

    <section class="hero is-medium has-text-centered grey">
      <div class="hero-body">
        <div class="container">
          <p class="title aTile is-4"> {{ name }} Capital</p>
          <p></p>
          <p class="subtitle is-6"> Been in operations since 1964 for 53 years now. Time tested approach to Emerging Markets Investing - Our investsments in Indian and Chinese markets extends beyond 50 yeards. We started investing in India in 1964, in China 1989 and in Brazil in 1998</p>
        </div>
      </div>
    </section>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container is-fluid">
          <p class="title aTile is-4"> {{ name }} Capital History</p>
        </div>
        <div class="image">
          <img src="../assets/4.png">
        </div>
      </div>
    </section>
    <div class="columns has-text-centered ones">
      <div class="column is-blue">
        <div class="is-128x128">
          <img src="../assets/5.png">
        </div>
        <p></p>
        <div class="title is-4">
          Value Investing
        </div>
        <p></p>
        <div class="subtitle is-6">
          Value Investing is an investment strategy where stocks are selected that trade for less than thier intrinsic values, Value investors activley seek stocks the believe the market has undervalued
        </div>
      </div>
      <div class="column is-pink">
        <div class="is-128x128">
          <img src="../assets/6.png">
        </div>
        <p></p>
        <div class="title is-4">
          Global Equities
        </div>
        <div class="subtitle is-6">
          The securities traded in the quity market can be either public sticks which are those listed on the stock exchange, or provately traded stocks. Often, private stocks are traded through dealers, which is definition of an over-the counter market.
        </div>
      </div>
      <div class="column is-purple">
        <div class="is-128x128">
          <img src="../assets/7.png">
        </div>
        <p></p>
        <div class="title is-4">Emerging Markets</div>
        <div class="subtitle is-6">An emergency market is a country that has characterstics of a deveped market but does not meet standard to be a developed market. ... The "frontier market" is used for developing countries with slower economies then 'emerging'</div>
      </div>
      <div class="column is-cyan">
        <div class="is-128x128">
          <img src="../assets/8.png">
        </div>
        <p></p>
        <div class="title is-4">Alternative Investing</div>
        <div class="subtitle is-6"> An alternative investment is an asset that is on of the conventional investment types, such as stocks, bonds and cash. ... Alternative investment inlcude provate equity, hedge finds, manged futures, real estate, commodities and derivatives contracts</div>
      </div>
    </div>
    <section class="section has-text-centered">
        <div class="container">
            <div class="title aTile"> AUM by Mandates</div>
        </div>
    </section>
    <div class="columns is-multiline has-text-centered">
      <div class="column is-half red">
        <div class="title is-4">How does {{ name }} Capital manke money</div>
        <br>
        <div class="subtitle is-6">{{ name }} capital has managed a long/short strategy designed ior high net worth investors, utilizing the rims deep value investment process and fundamental research platform.</div>
        <div class="subtitle is-6">
        Value equitu investment: By exploiting the inefficiencies inherent in the equity market, we produce returns in excess of the broad market with risk below the market, across all capitalization ranges. </div>
      </div>
      <div class="column is-half bl">
        <div class="title is-4">Who can invest</div>
        <br>
        <div class="subtitle is-6">Individual investors (High networth individuals) and their financial advisors can invest through {{ name }}. Minimum investment $20,000 </div>
        <div class="subtitle is-6">Institutional investors such as corporate as well as Endowments, charitable trusts and Foundullons, yay use separate account. Separate Account minimums $100,000. Mutual Fund minimum investment $20,000 </div>
      </div>
    </div>
    <div class="green section">
      <div class="container has-text-centered title is-4"> Key Concepts</div>
      <div class="columns is-multiline has-text-centered">
      <div class="column is-half">
        <div class="title is-4 is-left">Invest Anywhere and Anytime</div>

        <div class="subtitle is-6 is-left">As markets cycle. we have the ilexltoililli and independence to invest anywhere in the world we see value, including 
Dalenllallli overlooked oil-index opportunities </div>
      </div>
      <div class="column is-half">
        <div class="title is-4 is-right">Value Investing</div>
        <div class="subtitle is-6 is-right">Markets go up and go down Down and undervalued stocks give 
us the abliltu to earn price appreciation tor our low stock picks </div>
      </div>
      </div> 
      <div class="columns is-multiline has-text-centered">
      <div class="column is-half">
        <div class="title is-4 is-left">Deep value Equity Investing </div>
        <div class="subtitle is-6 is-left">
value equity strategies emphasize strict adherence to state, internally-generated fundamental research. low portfolio turnover, and active, prudently-concentrated porfiolios. $75 Million assets under management as of March 31.2017  </div>
      </div>
      <div class="column is-half">
        <div class="title is-4 is-right">Intelligent Investing </div>
        <div class="subtitle is-6 is-right">All intelligent investing is value investing -- acquiring more than what you are paying for. You must value the business in 
order to value the stock  </div>
      </div>
      </div>
    </div>
    <div class="image is-96x96 logo"><img src="../assets/logo.png"></div> 
    <section class="hero has-text-centered lt">
      <div class="hero-body">
        <div class="container">
          <p class="title aTile is-2"> See what’s fresh with {{ name }} Capital</p>
          <p></p>
          <p class="subtitle is-6"> 
We’ve always got something cooking to help you master your money and improve
your life. See the latest, and stay tuned tor big things. </p><p>
<button class="button aTile">Click here to download trianzcapitalpdf </button> </p>
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
  width: 100%;
  background: #345a74 url('../assets/x1.png');
  background-size: cover;
}
.top .title {
  color: white;
}
.top .subtitle {
  color: white;
}
.mul {
  background-blend-mode: overlay;
  background-color: #43799f;
}

.column .title {
  color: white;
}
.column .subtitle {
  color: white;
}
.is-half {
  padding-top: 5em;
  padding-bottom: 5em;
  padding-left: 0;
  padding-right: 0;
}
.is-left {
  padding-left: 5em;
  padding-right: 5em;
  border-right: solid 1px white;
}
.is-half .title {
  padding-bottom: 1em;
}
.is-right {
  padding-left: 5em;
  padding-right: 5em;
}
.grey {
  background-color: #f5f5f5;
}
.is-blue {
  background-color: #00bff3;
}
.is-pink {
  background-color: #f06eaa;
}
.is-purple {
  background-color: #8560a8;
}
.is-cyan {
  background-color: #1cbbb4;
}
.red {
  background: url('../assets/1.png');
  background-size: cover;
  padding: 5em;
}
.bl {
  background: url('../assets/2.png');
  background-size: cover;
  padding: 5em;
}
.green {
  margin-top: -1em;
  background: url('../assets/3.png');
  background-size: cover;
}

.green .title {
  color: white;
}
.red .title {
  color: white;
}
.bl .title {
  color: white;
}
.logo {
  margin: 47%;
  margin-top: -2.5em;
  position: absolute;
}
@media screen and (max-width: 768px) {
  
  .top .container {
    margin-top: 10vh;
  }
  .is-left {
    border-right: 0;
  }
  .logo {
  margin: 42%;
  margin-top: -2.5em;
  position: absolute;
}

}
</style>
