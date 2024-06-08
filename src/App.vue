<template>
    <div id="app">
      <HeaderSection @open-login-modal="showLoginModal = true"/>
      <LoginModal :isVisible="showLoginModal" @close-modal="showLoginModal = false" />
      <HomePage/>
      <ExperienceSection/>
      <InfoSection/>
      <FooterSection/>
    </div>
  </template>
  
  <script>
  import HeaderSection from './components/HeaderSection.vue'
  import LoginModal from './components/LoginModal.vue'
  import ExperienceSection from './components/ExperienceSection.vue'
  import InfoSection from './components/InfoSection.vue'
  import FooterSection from './components/FooterSection.vue'

  import HomePage from './components/HomePage.vue'

  
  export default {
    name: 'App',
    components: {
      HeaderSection,
      LoginModal,
      HomePage,
      ExperienceSection,
      InfoSection,
      FooterSection,
    },

    data(){
      return{
        showLoginModal: false,
      }
    },
  }
  </script>
  
  <style>
  @import '../public/css/bootstrap.css';
  @import '../public/css/responsive.css';
  @import '../public/css/style.scss';


  body {
  font-family: 'Poppins', sans-serif;
  color: #0c0c0c;
  background-color: #ffffff;
}

.layout_padding {
  padding-top: 90px;
  padding-bottom: 90px;
}

.layout_padding2 {
  padding: 45px 0;
}

.layout_padding2-top {
  padding-top: 45px;
  padding-bottom: 45px;
}

.layout_padding2-bottom {
  padding-bottom: 45px;
}

.layout_padding-top {
  padding-top: 90px;
}

.layout_padding-bottom {
  padding-bottom: 90px;
}

.heading_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.heading_container h2 {
  font-weight: bold;
  text-transform: uppercase;
}

  </style>
  