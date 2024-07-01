





<template>
  <div>
    <!--Header-->
    <header class="header_shadow">
      <!--Navbar-->
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.webp" alt="Extension Icon" class="logo">
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 class="site-title">Data Privacy</h1>
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

          <!--<router-link to="/" class="btn">Home</router-link> 
          <router-link to="/about" class="btn">About</router-link>
          <a class="ml-onclick-form btn" href="javascript:void(0)" @click="subscribeAndShowForm">Subscribe!</a>-->
        </div>
      </div>
    </header>

      
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <p>
            <strong>Thank you for trusting our Chrome Extension to help create a more positive and respectful online community.
            <br />Your privacy and security are our top priorities.</strong>
          </p>
        </div>
    </div>

    <div class="hero min-h-screen data-section">
      <h1 class="section-title">About data privacy</h1>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="feature_items_mot">
          <p>
        We collect your email address for login purposes. This data helps us identify you and provide a personalized experience. We do not collect any unnecessary information, and we are committed to protecting your privacy. Your email address is stored securely and is only used for authentication and communication purposes related to the extension.
        Your data is used to personalize your experience. For instance, we can remember your preferred types of counter speech and other settings, ensuring that the extension operates smoothly and efficiently for you.
        We do not share your data with third parties. We respect your privacy and are committed to protecting your personal information. All data collected through the extension is used solely for the purposes of improving your experience and providing the services offered by the extension. We do not sell, rent, or otherwise disclose your information to any third parties.
          </p>
        </div>
      </div>
    </div>



    <!---Divider-->
    <div class="flex flex-col w-full">
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center"></div> 
      <div class="divider"></div> 
      <div class="grid h-20 card bg-base-300 rounded-box place-items-center"></div>
    </div>


    <!---Footer-->
    <footer class="footer footer-center p-10 text-primary-content">
      <aside>
        <img width="50" height="50" src="../images/logo_3.webp"> <!--Inserting Logo-->
        <p class="font-bold" style="color: grey !important">
          AAI Project Semester <br>FHSTP BCC 
        </p> 
        <p style="color: grey !important">Copyright © 2024 - All right reserved</p>
        <router-link to="/faq" class="footer_btn">FAQ</router-link> <!--Link to the FAQ-->
          <router-link to="/data_privacy" class="footer_btn">Data Privacy</router-link> <!--Link to Dataprivacy statement-->
      </aside> 
    </footer>
  </div>
</template>

<script>
export default {
  name: 'about',
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
/* @import "../styles/about.css"; */
@import "../styles/output.css";
@import "../styles/custom.css";

@import "../style.css";
</style>
