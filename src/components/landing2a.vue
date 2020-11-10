<template>
   <Navbar/>
   <section class="main-sec">
      <div class="container">
         <div class="row">
            <div class="col-md-4 wow fadeInLeft">
               <div class="black-bx black-bx-leftbg">
                  <h4>Accept BTC, Mint & Send HXYG</h4>
                  <div>
                     By clicking on the below button you’ll 
                     accept buyers BTC, mint the corresponding 
                     amount of HXYG and send them 
                     to the buyers addresses. <br>
                     Accept <strong class="yellow">4</strong> buyers <strong class="yellow">1.2245 BTC</strong>
                  </div>
                  <a href="" class="btn-main">Accept, Mint & Send</a>
               </div>
               <div class="black-bx black-bx-leftbg">
                  <h4>Allocate Gold</h4>
                  <div>
                     Enter the amount of gold you want to allocate
                     <div class="input-outer">
                        <input class="form-control" type="text" name="" placeholder="Enter Amount in Oz">
                     </div>
                     <div>By clicking on the below button you’ll allocate gold to the vault.</div>
                  </div>
                  <a href="" class="btn-main">Allocate</a>
               </div>
            </div>
            <div class="col-md-8 wow fadeInRight">
               <div class="black-bx ">
                  <div class="nav-blck-bx-outer">
                     <h4>{{tblheading}}</h4>
                     <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item">
                           <a class="nav-link active" data-toggle="pill" href="#home" v-on:click="tblheading='Dividends'">B1</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="pill" href="#menu1" v-on:click="tblheading='Dividends2'">B2</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" data-toggle="pill" href="#menu2" v-on:click="tblheading='Dividends3'">B3</a>
                        </li>
                     </ul>
                  </div>

                  <!-- Tab panes -->
                  <div class="tab-content">
                     <div id="home" class="container tab-pane active"><br>
                        <div id="transaction_ref" v-html="content">
                        </div>
                     </div>
                     <div id="menu1" class="container tab-pane fade"><br>
                        <div id="transaction_ref" v-html="content">
                        </div>
                     </div>
                     <div id="menu2" class="container tab-pane fade"><br>
                        <div id="transaction_ref" v-html="content">
                        </div>
                     </div>
                  </div>
                 
               </div>
               <div class="black-bx">
                  <div class="black-bx-single">BTC Received: <strong>3432.43543 BTC</strong></div>
               </div>
               <div class="black-bx">
                  <div class="black-bx-single">Gold sent to vault: <strong>30,453.845 Oz</strong></div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <Footer/>
</template>
<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'Landing2',
  components: {
    Navbar,
    Footer
  },
  data() {
      return{
         content:"",
         tblheading:"Dividends"
         }
   },
   mounted() {
      for (var i = 0; i <40; i++) {
         this.content += ' <div class="trans_ref_outer">\
               <div id="date">03/12/20</div>\
               <div id="date">12:23</div>\
               <div id="date">1.2323 <span class="ml-2">BTC</span></div>\
               <div id="date">tx5454654gfgdfhfdhj5jty6</div>\
         </div>';
      }
   },
}

</script>
