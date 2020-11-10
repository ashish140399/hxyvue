<template>
    <Navbar/>
    <section class="main-sec wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
        <div class="container">
            <div class="row ">
                <div class="col-lg-4 d-flex flex-column justify-content-between">
                    <div class="black-bx black-bx-main">
                        <h4>BTC Wallet</h4>
                        <div>BTC in wallet: <strong>2.138345</strong></div>
                        <img src="../assets/btc-bck.png">
                    </div>
                    <div class="black-bx black-bx-main">
                        <h4>HXYG Wallet</h4>
                        <div>HXYG in wallet: <strong>2.138345</strong></div>
                        <img src="../assets/hxy-bck.png">
                    </div>
                </div>
                <div class="col-lg-4 d-flex">
                    <div class="black-bx">
                        <h4>Exchange</h4>
                        <div class="black-bx-cntnt">
                            Every HXY.Gold (HXYG) token is backed by an ounce of allocated gold. <br>
                            Use this tool to exchange BTC to HXYG.	
                            <div class="input-outer">
                                <input class="form-control" type="text" name="" placeholder="Enter BTC Amount">
                            </div>
                            <div>You'll receive: <strong class="yellow">2.138345 HXYG</strong></div>
                        </div>
                        <a href="" class="btn-main">Exchange</a>
                        <div class="tooltipout">
                            <i class="fas fa-question-circle"></i>
                            <span class="tooltiptext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 d-flex">
                    <div class="black-bx">
                        <h4>Dividends</h4>
                        <div class="black-bx-cntnt">
                            Every HXY.Gold (HXYG) in your wallet brings you daily dividends. <br>
                            Use this tool to claim the dividends you received to your wallet. <br>
                            You received <strong class="yellow">0.04512 HXYG</strong> in dividends
                        </div>
                        <a href="" class="btn-main">Claim HXYG</a>
                        <div class="tooltipout">
                            <i class="fas fa-question-circle"></i>
                            <span class="tooltiptext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 d-flex">
                    <div class="black-bx">
                        <h4>Need BTC?</h4>
                        <div class="black-bx-cntnt">
                            Use the the below window to purchase
                            BTC with more than 200 different 
                            Cryptocurrencies.
                            <div class="input-outer">
                                <div class="option-group">
                                    <div class="dropdown">
                                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                        <img src="../assets/icons/com-icon.png" alt="icons" class="from-icon">
                                        ETH 
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                            <img src="../assets/icons/com-icon.png" alt="icons">
                                            ETH 
                                            </a>
                                            <a class="dropdown-item" href="#">
                                            <img src="../assets/icons/com-icon.png" alt="icons">
                                            ETH 
                                            </a>
                                            <a class="dropdown-item" href="#">
                                            <img src="../assets/icons/com-icon.png" alt="icons">
                                            ETH 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <input class="form-control" type="text" name="" placeholder="Enter ETH Amount">
                            </div>
                            <div>You'll receive: <strong class="yellow">0.000 BTC</strong></div>
                        </div>
                        <a href="" class="btn-main">Buy BTC</a>
                        <div class="tooltipout">
                            <i class="fas fa-question-circle"></i>
                            <span class="tooltiptext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="black-bx ">
                        <div class="black-bx-single">BTC price: <strong>$ 13,453.9732</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">Gold spot price: <strong>$ 1890.9732</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">HXYG Price: <strong>$ 1890.9732</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">Last Gold Audit: <span><strong>2 days ago</strong><strong class="yellow">check</strong></span></div>
                    </div>
                </div>
                <!-- d-flex flex-column justify-content-between -->
                <div class="col-lg-4">
                    <div class="black-bx ">
                        <div class="black-bx-single">Total claimed dividends: <strong>0.34432443 BTC</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">Amount of gold in LP: <strong>64,323.8475 Oz</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">Your pool share: <strong>0.21%</strong></div>
                    </div>
                    <div class="black-bx">
                        <div class="black-bx-single">Burned HXYG token: <strong>653.8765 HXYG</strong></div>
                    </div>
                </div>
            </div>
            <div class="info">
                <img src="../assets/info.png">
                The liquidity Gold pool you are entering by buying HXYG is held and insured Audited under the holdings company HXY.Gold holdings LTD
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'Landing',
  components: {
    Navbar,
    Footer
  }
}
</script>

