<template>
  <div>
    <!-- Header -->
    <header class="header_shadow">
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
            <img src="../images/logo_3.webp" alt="Extension Icon">
          </router-link>
        </div>
        <div class="navbar-center">
          <h1 style="font-size: 48px; font-weight: bold;">White Knight</h1>
        </div>
        <div class="navbar-end">
          <router-link to="/" class="btn">Home</router-link>
          <router-link to="/about" class="btn">About</router-link>
        </div>
      </div>
    </header>

    <!-- Video / Download -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-row lg:flex-row">
        <video width="1000" height="1200" autoplay loop>
          <source src="../videos/Final_Animation_2frames.mp4" type="video/mp4">
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

    <!-- Features -->
    <div class="hero min-h-screen" style="display:flex; flex-direction: column;">
      <h1 style="font-size: 32px; font-weight: bold; color: black; padding: 25px">Features</h1>
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

    <!-- subscription form -->
    <div class="subscription-form" style="padding: 50px 0;background-color: #f0f0f0">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p class="">Enter your email address to receive updates on our chrome extension release</p>
        <form @submit.prevent="subscribe">
          <input type="email" v-model="email" placeholder="Enter your email" required class="input input-bordered input-primary w-full max-w-xs mb-4">
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
        <p v-if="message" class="mt-4">{{ message }}</p>
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
      message : ""
    }
  },
  methods: {
    downloadExtension() {
      alert("Download in progress...");
    }
  }
}
</script>

<style scoped>
/* @import "../styles/main.css"; */
@import "../styles/output.css";
@import "../styles/custom.css";
</style>
