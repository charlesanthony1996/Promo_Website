<template>
  <div>
    <!---Header-->
    <header class="header_shadow">
      <!--Navbar-->
      <div class="navbar bg-white">
        <div class="navbar-start">
          <router-link to="/">
          <img src="../images/logo_3.png" alt="Extension Icon">
        </router-link>
        </div>
        <div class="navbar-center">
          <h1 style="font-size: 48px; font-weight: bold;">Frequently Asked Questions</h1>
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
      <section v-for="category in faq" :key="category.title" class="hero min-h-screen bg-base-200">
        <div class="hero-content text-left">
          <div class="max-w-md">
            <h1 class="section-heading">{{ category.title }}</h1>
            <div v-for="(qa, index) in category.questions" :key="index">
              <p class="py-6"><strong>{{ qa.question }}</strong></p>
              <p>{{ qa.answer }}</p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <p>
          <strong>
            I hope this FAQ helps you get the most out of our Chrome Extension.
            <br />
            Thank you for using our extension to make the internet a more positive place!
          </strong>
        </p>
      </div>
    </div>

    <!--Footer-->
    <footer class="footer footer-center p-10 text-primary-content">
      <aside>
        <img width="50" height="50" src="../images/logo_3.png" /> <!--Inserting Logo-->
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
    faq: [
      {
        title: "General",
        questions: [
          {
            question: "Q1: What is this Chrome Extension for?",
            answer: "A1: This extension is designed to generate counter speech for hate comments on YouTube. It helps users respond to negative and harmful comments with positive, constructive counter speech.",
          },
          {
            question: "Q2: How does the extension work?",
            answer: "A2: The extension uses advanced Large Language Models (LLMs) to detect hate speech in YouTube comments and then generates appropriate counter speech that you can use to respond.",
          },
          {
            question: "Q3: Why do I need to log in with my email?",
            answer: "A3: Logging in with your email allows us to personalize your experience, save your preferences, and provide you with relevant updates and improvements to the extension.",
          },
        ],
      },
      {
        title: "Privacy and Data",
        questions: [
          {
            question: "Q4: What data do you collect from me?",
            answer: "A4: We collect your email address for login purposes. This data helps us identify you and provide a personalized experience. We do not collect any unnecessary information, and we are committed to protecting your privacy. Your email address is stored securely and is only used for authentication and communication purposes related to the extension.",
          },
          {
            question: "Q5: How is my data used?",
            answer: "A5: Your data is used to personalize your experience. For instance, we can remember your preferred types of counter speech and other settings, ensuring that the extension operates smoothly and efficiently for you.",
          },
          {
            question: "Q6: Do you share my data with third parties?",
            answer: "A6: No, we do not share your data with third parties. We respect your privacy and are committed to protecting your personal information. All data collected through the extension is used solely for the purposes of improving your experience and providing the services offered by the extension. We do not sell, rent, or otherwise disclose your information to any third parties.",
          },
        ],
      },
      {
        title: "Usage",
        questions: [
          {
            question: "Q7: Is there a tutorial for using the extension?",
            answer: "A7: Yes, you can find the tutorial on our website.",
          },
          {
            question: "Q8: How do I install the extension?",
            answer: "A8: You can install the extension from the Chrome Web Store. Simply search for the extension, click 'Add to Chrome,' and follow the prompts.",
          },
          {
            question: "Q9: How do I use the extension to respond to hate comments?",
            answer: "A9: Once installed and logged in, the extension will automatically detect hate comments on YouTube. It will then generate counter speech suggestions that you can choose from and use to respond.",
          },
          {
            question: "Q10: Can I customize the counter speech suggestions?",
            answer: "A10: No, but you can choose which kind of counter speech gets created.",
          },
        ],
      },
      {
        title: "Technical Issues",
        questions: [
          {
            question: "Q11: What should I do if the extension is not working properly?",
            answer: "A11: First, ensure you have the latest version of the extension installed. If the issue persists, try restarting your browser or reinstalling the extension.",
          },
        ],
      },
      {
        title: "Miscellaneous",
        questions: [
          {
            question: "Q12: Is this extension free to use?",
            answer: "A12: Yes, the extension is free to use. We aim to promote positive online interactions without any cost to the user.",
          },
          {
            question: "Q13: Can I use this extension on browsers other than Chrome?",
            answer: "A13: Currently, the extension is only available for Chrome.",
          },
          {
            question: "Q14: Can I use this extension for other social media platforms than YouTube?",
            answer: "A14: Currently, the extension is only available for usage on YouTube.",
          },
        ],
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
}

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
