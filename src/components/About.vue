<template>
  <div>
    <!--Header-->
    <header class="header_shadow">
      <!--Navbar-->
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.webp" alt="Extension Icon"> <!--Adding the icon-->
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 style="font-size: 48px; font-weight: bold;">About the Project</h1>
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

    <!---Images-->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-row lg:flex-row" style="padding: 50px">
        <div class="carousel-item">
          <img src="../images/logo_3.webp" alt="Logo" /> <!--Logo-->
        </div> 
        <div class="carousel-item">
          <img src="../images/mascot.png" alt="Mascot" /> <!--Mascot-->
        </div> 
        <div class="carousel-item">
          <img src="../images/Finished_Poster.png" alt="Poster" /> <!--Poster-->
        </div> 
      </div>
    </div>

    <!---Motivation-->
    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <h1 style="font-size: 32px; font-weight: bold; color: black; padding: 10px">Motivation</h1>
      <div class="hero-content flex-row lg:flex-row-reverse">
        <div class="feature_items">
          <p class="py-6">
            Hate Speech can seriously harm individuals and create negativity in online communities so we want to give users the tools to detect and counter Hate Speech to lower the barriers for actively participating in combating Hate Speech online.
            Our plan for the long run is that we want to promote positive conversations instead of hateful ones, to create a safer and more welcoming online environment.
            By encouraging respectful interactions, we aim to make a positive impact on how people communicate.
          </p>
        </div>
      </div>
    </div>

    <!---Team-->
    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <h1 style="font-size: 32px; font-weight: bold; color: black; padding: 10px">The Team</h1>
      <div class="hero-content flex-row lg:flex-row-reverse">
        <div class="feature_items">
          <p class="py-6">
            The team consist of 7 members, who are all part of the AI Media Lab for the Bachelor Creative Computing.
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

    <!---Timeline-->
    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <div class="hero-content flex-row lg:flex-row-reverse">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">March 2024</time>
              <div class="text-lg font-black">First Concepts</div>
              The first few weeks included a lot of research, designing and basic set up of the project. 
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">April 2024</time>
              <div class="text-lg font-black">Alpha Version</div>
              In this phase we focused on getting the alpha version of our project running. We followed our design concepts and prototypes in a basic way but focused more on the functionality. 
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">Mai 2024</time>
              <div class="text-lg font-black">Beta Version</div>
              In may we worked on and finished the Beta version of our project. We focused on implementing more functionality and refining the design. In this phase we also started working on marketing, our webpage and preparing for our Project Vernissage. 
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">June 2024</time>
              <div class="text-lg font-black">Final Product</div>
              June concluded this project semester. We finished the extension and mainly focused on polishing. We focused more time on the marketing aspects and finished the preparations for the Vernissage. On June 14th the Project vernissage was held where we presented the outcome of our semester.
              <hr/>
            </div>
          </li>
        </ul>
      </div>
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
