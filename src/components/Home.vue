<template>
  <div>
    <!-- Header -->
    <header class="header_shadow">
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.webp" alt="Extension Icon"> <!--Adding the icon-->
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 style="font-size: 48px; font-weight: bold;">White Knight</h1>
        </div>
        <div class="navbar-end">

          <!--Dropdown Menu-->
          <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1">Menu</div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><router-link to="/" class="menu_item">Home</router-link> <!--Link to Main page--></li>
              <li><router-link to="/about" class="menu_item">About</router-link> <!--Link to About page--></li>
              <li><a class="menu_item" href="javascript:void(0)" @click="subscribeAndShowForm">Subscribe!</a> <!--Link to Subsciption--></li>
            </ul>
          </div>

          <!--<router-link to="/" class="btn">Home</router-link>--> <!--Link to Main page-->
          <!--<router-link to="/about" class="btn">About</router-link>--> <!--Link to About page-->
          <!--<a class="ml-onclick-form btn" href="javascript:void(0)" @click="subscribeAndShowForm">Subscribe!</a>--> <!--Link to Subsciption-->

        </div>
      </div>
    </header>

    <!-- Video / Download -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-row lg:flex-row">
        <video width="1000" height="1200" autoplay loop>
          <source src="../videos/New_Animation_.mp4" type="video/mp4"> <!--Inserting the animation-->
        </video>
        
        <!--How it works-->
        <div class="div_back">
          <h1 class="text-5xl font-bold">How it works:</h1>
          <ol style="color: rgb(42, 42, 42); padding-bottom: 20px;">
            <li>Detection and highlighting of Hate Speech.</li>
            <li>Pick a generated counter speech answer.</li>
            <li>If you don't like the options, just hit the refresh button.</li>
          </ol>
          
          <!--Download button-->
          <button class="btn btn-wide" @click="downloadExtension">Download</button>
        </div>
      </div>
    </div>

    <!--Features Headline-->
    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <h1 style="font-size: 32px; font-weight: bold; color: black; padding: 25px">Features</h1>

      <!--Individual Features-->
      <div class="hero-content flex-row lg:flex-row-reverse">
        <div class="feature_items">
          <h1 class="text-5xl font-bold">HS Detection</h1>
          <p class="py-6">Our extension scans the comments under YouTube videos and highlights hate speech.</p>
        </div>
        
        <div class="feature_items">
          <h1 class="text-5xl font-bold">CS Generation</h1>
          <p class="py-6">With one button click you can generate a counter speech comment for a detected hate speech comment of your choice.</p>
        </div>

        <div class="feature_items">
          <h1 class="text-5xl font-bold">Regenerate CS</h1>
          <p class="py-6">If you are not satisfied with the generated CS, you can easily regenerate it. Also, you can always set your preferred CS type either in the settings or directly in the popup.</p>
        </div>

        <div class="feature_items">
          <h1 class="text-5xl font-bold">Reply with CS</h1>
          <p class="py-6">To reply you can either copy the CS or click the reply button and get it directly inserted into the answer field.</p>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <footer class="footer footer-center p-10 text-primary-content">
      <aside>
        <img width="50" height="50" src="../images/logo_3.webp"> <!--Inserting Logo-->
        <p class="font-bold" style="color: grey !important;">
          AAI Project Semester <br>FHSTP BCC
        </p>
        <p style="color: grey !important">Copyright © 2024 - All rights reserved</p>
        <router-link to="/faq" class="footer_btn">FAQ</router-link> <!--Link to the FAQ-->
          <router-link to="/data_privacy" class="footer_btn">Data Privacy</router-link> <!--Link to Dataprivacy statement-->
      </aside>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      email: "",
      message: "",
      subscribed: false // Track subscription status
    }
  },
  methods: {
    downloadExtension() {
      alert("Download in progress...");
    },
    async subscribeAndShowForm() {
      if (!this.subscribed) {
        await this.subscribe(); // Subscribe only if not already subscribed
        this.subscribed = true; // Mark as subscribed
      }
      this.showMailerLiteForm(); // Show MailerLite form
    },
    async subscribe() {
      // Subscribe logic
      (function(w, d, e, u, f, l, n) {
        w[f] = w[f] || function() {
          (w[f].q = w[f].q || []).push(arguments);
        };
        l = d.createElement(e);
        l.async = 1;
        l.src = u;
        n = d.getElementsByTagName(e)[0];
        n.parentNode.insertBefore(l, n);
      })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');

      ml('account', '975068');
      // Additional subscription logic if needed
    },
    showMailerLiteForm() {
      if (typeof ml === 'function') {
        ml('show', 'KDQ7rA', true);
      } else {
        console.error("MailerLite is not initialized properly.");
      }
    }
  }
}
</script>

<style scoped>
/* @import "../styles/main.css"; */
@import "../styles/output.css"; 
@import "../styles/custom.css";

@import "../style.css";
</style>
