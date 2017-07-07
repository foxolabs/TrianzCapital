<template>
  <div id="contact">
  <div class="hero is-medium top has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="subitle lwhite">Contact Us</p>
        </div>
      </div>
    </div>
    <section class="hero  has-text-centered">
      <div class="hero-body">
        <div class="container contact">
          <!-- <div class="field">
            <p class="control"><input class="input" type="name" placeholder="Full Name"></p>
            
          </div>
          <div class="field">
            <p class="control"><input class="input" type="email"><input class="input"type="number"></p>
          </div>
          <div class="field">
            <p class="control"><input class="input" type="text"></p>
          </div>
          <div class="field">
            <p class="control"><input class="input" type="text"></p>
          </div> -->
          <table class="table">
            <tbody>
              <tr>
                <td colspan="2"><p class="control"><input class="input" type="name" placeholder="Full Name"></p></td>
              </tr>
              <tr>
                <td>
                  <p class="control"><input class="input" type="email" placeholder="Email Address"></p>
                </td>
                <td>
                  <p class="control"><input class="input" type="text" placeholder="Phone"></p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="control"><input class="input" type="text" placeholder="Subject"></p>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <p class="control"><input class="input" type="text" placeholder="Message"></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="columns is-gapless has-text-centered">
          <div class="column">
            <div class="title">ADDRESS</div>
            <div class="subitle">

            </div>
          </div>
          <div class="column">
            <div class="title">EMAIL</div>
            <div class="subitle">
              info@gmail.com
            </div>
          </div>
          <div class="column">
            <div class="title">CALL US</div>
            <div class="subitle">
              +1-917-775-0093 (USA)
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="title aTile"> {{ name }} Capital</p>
          <break></break>
          <p class="subtitle"> All investments contain risks, and investors should consider the risks associated with investing in these types of Funds. Value investing involves the risk that the Fund investment in companies whose securities are believed to be undervalued, relative to their underlying profitability, will not appreciate in value as anticipated. Investing in foreign securities and emerging markets poses additional market risks since political and economic events unique in a country or region will affect those markets and their issuers. Stocks of small companies may be more volatile than, and not as readily marketable as, those of larger companies. Investments made in small capitalization companies are subject to a higher degree of market risk because they tend to be more volatile and less liquid when compared to larger, more established companies. The material included on this website is for informational purposes only, and should not be viewed as a current or past recommendation or a solicitation of an offer to buy or sell any securities or investment product or to adopt any investment strategy. All information in this website, including with respect to investment objectives and themes, is subject to change without notice or notification of such changes made. The material on this website is not investment, legal, tax, or accounting advice. This website includes forward looking statements and statements of opinion. No representations are made that any of such statements will prove to be accurate, and there is a substantial likelihood that some or all of the forward looking statements will prove highly inaccurate. No endorsement or recommendation is made as to any other entity or issuer, or any security issued thereby, that is referenced in this website, and any information regarding any such entity, issuer or security should be obtained from such entity or issuer directly.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'contact',
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
    background-image: url("../assets/9111.png");
    background-size: cover;
  }
  .title {
    color: primary-color;
  }
  .lwhite {
    color: white;
  }

</style>
