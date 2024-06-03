<template>
    <div id="app">
      <HeaderComponent/>
      <SliderComponent/>
      <ExperienceSection/>
      <AboutSection/>
      <InfoSection/>
      <FooterSection/>
      
    </div>
  </template>
  
  <script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import SliderComponent from './components/SliderComponent.vue'
  import ExperienceSection from './components/ExperienceSection.vue'
  import AboutSection from './components/AboutSection.vue'
  import InfoSection from './components/InfoSection.vue'
  import FooterSection from './components/FooterSection.vue'

  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      SliderComponent,
      ExperienceSection,
      AboutSection,
      InfoSection,
      FooterSection,
    
    }
  }
  </script>
  
  <style>
  @import '../public/css/bootstrap.css';
  @import '../public/css/responsive.css';
  @import '../public/css/style.css';
  @import '../public/css/style.scss';
  </style>
  