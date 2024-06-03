<template>
    <section class="about_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-9 mx-auto">
            <div class="img-box">
              <img :src="aboutImage" alt="">
            </div>
          </div>
        </div>
        <div class="detail-box">
          <h2>{{ aboutTitle }}</h2>
          <p>{{ aboutContent }}</p>
          <a href="">{{ readMoreLink }}</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    data() {
      return {
        aboutTitle: 'About Spering Company',
        aboutContent: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you`,
        readMoreLink: 'Read More',
        aboutImage: 'images/about-img.jpg'
      };
    }
  }
  </script>
  
  <style scoped>
  /* Gerekirse bileşen özel CSS stilleri buraya eklenebilir */
  </style>
  