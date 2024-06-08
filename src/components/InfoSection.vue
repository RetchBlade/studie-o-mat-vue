<template>
    <section class="info_section">
      <div class="info_container layout_padding-top">
        <div class="container">
          <div class="info_top">
            <div class="info_logo">
              <img :src="logoImage" alt="" />
              <span>{{ companyName }}</span>
            </div>
            <div class="social_box">
              <a href="#"><img src="images/fb.png" alt=""></a>
              <a href="#"><img src="images/twitter.png" alt=""></a>
              <a href="#"><img src="images/linkedin.png" alt=""></a>
              <a href="#"><img src="images/instagram.png" alt=""></a>
              <a href="#"><img src="images/youtube.png" alt=""></a>
            </div>
          </div>
  
          <div class="info_main">
            <div class="row">
              <div class="col-md-3 col-lg-2">
                <div class="info_link-box">
                  <h5>Useful Link</h5>
                  <ul>
                    <li :class="{ 'active': currentTab === 'home' }">
                      <a @click="changeTab('home')" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li :class="{ 'active': currentTab === 'about' }">
                      <a @click="changeTab('about')" href="#">About</a>
                    </li>
                    <li :class="{ 'active': currentTab === 'work' }">
                      <a @click="changeTab('work')" href="#">Work</a>
                    </li>
                    <li :class="{ 'active': currentTab === 'category' }">
                      <a @click="changeTab('category')" href="#">Category</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <h5>Offices</h5>
                <p>{{ officeContent }}</p>
              </div>
              <div class="col-md-3 col-lg-2 offset-lg-1">
                <h5>Information</h5>
                <p>{{ informationContent }}</p>
              </div>
              <div class="col-md-3 offset-lg-1">
                <div class="info_form">
                  <h5>Newsletter</h5>
                  <form action="">
                    <input type="email" placeholder="Email">
                    <button>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-lg-9 col-md-10 mx-auto">
              <div class="info_contact layout_padding2">
                <div class="row">
                  <div class="col-md-3">
                    <a href="#" class="link-box">
                      <div class="img-box">
                        <img src="images/location.png" alt="">
                      </div>
                      <div class="detail-box">
                        <h6>Location</h6>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="link-box">
                      <div class="img-box">
                        <img src="images/mail.png" alt="">
                      </div>
                      <div class="detail-box">
                        <h6>{{ email }}</h6>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-5">
                    <a href="#" class="link-box">
                      <div class="img-box">
                        <img src="images/call.png" alt="">
                      </div>
                      <div class="detail-box">
                        <h6>{{ phoneNumber }}</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'InfoSection',
    data() {
      return {
        companyName: 'Web Pioneers',
        logoImage: 'images/webpage-logo.jpg',
        officeContent: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
        informationContent: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
        email: 'demo@gmail.com',
        phoneNumber: 'Call +01 1234567890',
        currentTab: 'home'
      };
    },
    methods: {
      changeTab(tab) {
        this.currentTab = tab;
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  