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
        aboutImage: '/studi_o_mat/public/images/about-img.jpg'
      };
    }
  }
  </script>
  
  <style scoped>
    
.about_section {
  text-align: center;
}

.about_section .img-box img {
  width: 100%;
}

.about_section .detail-box h2 {
  font-weight: bold;
  text-transform: uppercase;
}

.about_section .detail-box p {
  margin-top: 15px;
}

.about_section .detail-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #ff4f5a;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
  margin-top: 25px;
}

.about_section .detail-box a:hover {
  background-color: transparent;
  border-color: #ff4f5a;
  color: #ff4f5a;
}
  </style>
  