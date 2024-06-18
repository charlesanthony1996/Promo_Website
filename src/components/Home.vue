<template>
  <div>
    <!-- Header -->
    <header class="header_shadow">
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.webp" alt="Extension Icon" class="logo">
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 class="site-title">White Knight</h1>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="btn">Home</router-link>
          <router-link to="/about" class="btn">About</router-link>
          <a class="ml-onclick-form btn" href="javascript:void(0)" @click="subscribeAndShowForm">Subscribe!</a>
        </div>
      </div>
    </header>

    <!-- Video / Download -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <video class="video-responsive" autoplay loop>
          <source src="../videos/New_Animation.mp4" type="video/mp4">
        </video>
        <div class="div_back">
          <h1 class="text-5xl font-bold">How it works:</h1>
          <ol style="color: rgb(42, 42, 42); padding-bottom: 20px;">
            <li>Detection and highlighting of Hate Speech.</li>
            <li>Pick a generated counter speech answer.</li>
            <li>If you don't like the options, just hit the refresh button.</li>
          </ol>
          <button class="btn btn-wide" @click="downloadExtension">Download</button>
        </div>
      </div>
    </div>

    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <h1 class="features-title">Features</h1>
      <div class="hero-content flex-col lg:flex-row-reverse">
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
        <img width="50" height="50" src="../images/logo_3.webp">
        <p class="font-bold" style="color: grey !important;">
          AAI Project Semester <br>FHSTP BCC
        </p>
        <p style="color: grey !important">Copyright © 2024 - All rights reserved</p>
        <router-link to="/faq" class="footer_btn" style="color: grey !important;">FAQ</router-link>
        <router-link to="/data_privacy" class="footer_btn" style="color: grey !important">Data Privacy</router-link>
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
      const link = document.createElement("a")
      link.href = "../extension-files.zip"
      link.download = "extension-files.zip"
      link.click()
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
@import "../styles/output.css";
@import "../styles/custom.css";

.header_shadow {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

:root, [data-theme] {
    background-color: #ffffff;
    color: var(--fallback-bc, oklch(var(--bc) / 1));
}

.navbar-end .btn {
    background-color: #5AB2FF;
    color: #fff;
    margin-left: 15px; 
    border-style: none; 
}

.navbar-end .btn:hover {
    background-color: #01204E;
    color: #fff;
    margin-left: 15px; 
    border-style: none; 
}

.text-5xl {
    color: black; 
}

.div_back .btn {
    background-color: #5AB2FF;
    color: #fff;
    border-style: none; 
}

.div_back .btn:hover {
    background-color: #01204E;
    color: #fff;
    border-style: none; 
}

.footer {
    background-color: #01204E; 
}

.feature_items {
    margin: 20px; 
}

.carousel-item{
    width: 400px; 
    height: 500px; 
}

.py-6 {
    color:rgb(31, 31, 31); 
}

.logo {
    max-width: 100px;
    height: auto;
}

.site-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.video-responsive {
    max-width: 100%;
    height: auto;
}

.features-section, .motivation-section, .team-section, .timeline-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.features-title {
    font-size: 32px;
    font-weight: bold;
    color: black;
    padding: 25px;
    text-align: center;
}

/* Media Queries */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
  }

  .navbar-center h1 {
    font-size: 32px;
  }

  .features-section .hero-content {
    flex-direction: column;
  }

  .feature_items {
    margin: 10px;
  }
}

@media (max-width: 768px) {
  .navbar-center h1 {
    font-size: 24px;
  }

  .navbar-end .btn {
    margin-left: 10px;
  }

  .features-title {
    font-size: 24px;
  }

  .feature_items h1 {
    font-size: 20px;
  }

  .feature_items p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .navbar-end .btn {
    margin-left: 5px;
  }

  .features-title {
    font-size: 18px;
  }

  .feature_items h1 {
    font-size: 18px;
  }

  .feature_items p {
    font-size: 14px;
  }

  .navbar-center h1 {
    font-size: 18px;
  }

  .navbar-end .btn {
    font-size: 12px;
    padding: 5px 10px;
  }
}
</style>
