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
<style>

  @import "../style.css";

  .main-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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
