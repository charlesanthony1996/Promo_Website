<template>
  <div>
    <header class="header_shadow">
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.png" alt="Extension Icon" class="logo">
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 class="site-title">Data Privacy</h1>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="btn">Home</router-link>
          <router-link to="/about" class="btn">About</router-link>
        </div>
      </div>
    </header>

    <div class="banner">
      <section v-for="section in sections" :key="section.heading" class="hero min-h-screen bg-base-200">
        <div class="hero-content text-left">
          <div class="max-w-md">
            <h1 class="section-heading">{{ section.heading }}</h1>
            <br />
            <p class="py-6" v-html="section.content"></p>
          </div>
        </div>
      </section>
    </div>

    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <p>
          <strong>Thank you for trusting our Chrome Extension to help create a more positive and respectful online community.
          <br />Your privacy and security are our top priorities.</strong>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer footer-center p-10 text-primary-content">
      <aside>
        <img width="50" height="50" src="../images/logo_3.png" />
        <p class="font-bold" style="color: grey !important">AAI Project Semester <br />FHSTP BCC</p>
        <p style="color: grey !important">Copyright © 2024 - All right reserved</p>
        <router-link to="/faq" class="footer_btn" style="color: grey !important">FAQ</router-link>
        <router-link to="/data_privacy" class="footer_btn" style="color: grey !important">Data Privacy</router-link>
      </aside>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          heading: "Introduction",
          content: `Welcome to our Chrome Extension “White Knight”, designed to generate counter speech for hate comments on YouTube. We value your privacy and are committed to protecting your personal data. This Data Privacy Statement explains how we collect, use, and protect your information when you use our extension.`,
        },
        {
          heading: "Information We Collect",
          content: `To log in and create an account, we require your email address. This helps us personalize your experience and provide you with relevant updates.`,
        },
        {
          heading: "Legal Basis for Processing",
          content: `By using our extension, you consent to the collection and use of your data as described in this statement.`,
        },
        {
          heading: "Data Retention",
          content: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this statement. If you delete your account, we will erase your personal data.`,
        },
        {
          heading: "Your Rights",
          content: `You have the following rights regarding your personal data:
            <ul>
              <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal or legitimate business retention requirements.</li>
            </ul>`,
        },
        {
          heading: "Changes to This Statement",
          content: `We may update this Data Privacy Statement from time to time. We will notify you of any significant changes by posting the new statement on our Website or through other appropriate communication channels.`,
        },
      ],
    };
  },
};
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
    color: rgb(31, 31, 31); 
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

.banner {
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    border-width: 18px;
    border-color: #aaaaaa;
    padding: 20px;
    width: 100%;
    max-width: 800px;
}

.section-heading {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: black;
    padding: 10px;
}

@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
  }

  .navbar-center h1 {
    font-size: 32px;
  }

  .section-heading {
    font-size: 24px;
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

  .section-heading {
    font-size: 20px;
  }

  .feature_items h1 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .navbar-end .btn {
    margin-left: 5px;
  }

  .section-heading {
    font-size: 18px;
  }

  .feature_items h1 {
    font-size: 18px;
  }
}
</style>
