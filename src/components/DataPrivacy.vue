<template>
    <div>
      <!---Header-->
      <header class="header_shadow">
        <!--Navbar-->
        <div class="navbar bg-white">
          <div class="navbar-start">
            <router-link to="/">
            <img src="../images/logo_3.png" alt="Extension Icon"> <!--Adding the icon-->
          </router-link>
          </div>
          <div class="navbar-center">
            <h1 style="font-size: 48px; font-weight: bold;">Data Privacy</h1> <!--Title-->
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
          <router-link to="/about" class="btn">About</router-link>-->
          </div>
        </div>
      </header>
      
      <!--Banner-->
      <div class="banner">
        <!--Individual Elements-->
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
          <router-link to="/faq" class="footer_btn">FAQ</router-link> <!--Link to the FAQ-->
          <router-link to="/data_privacy" class="footer_btn">Data Privacy</router-link> <!--Link to Dataprivacy statement-->
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

  @import "../style.css";

  .main-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .hero {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .hero-content {
    width: 100%;
  }
  .max-w-md {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  .section-heading {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: black;
    padding: 10px;
  }
  .banner {
    background-color: white;
    margin-left: 400px;
    margin-right: 400px;
    border-radius: 15px;
    border-width: 18px;
    border-color: #aaaaaa;
  }
  </style>
  