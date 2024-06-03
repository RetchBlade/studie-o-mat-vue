<template>
    <div>
      <div class="hero_area">
        <!-- header section strats -->
        <header class="header_section">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
              <a class="navbar-brand" href="index.html">
                <img src="images/webpage-logo.jpg" alt="" />
                <span>
                  Web Pioneers
                </span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
  
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                  <li class="nav-item ">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html"> About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="work.html">Work </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="category.html"> Category </a>
                  </li>
                </ul>
                <div class="user_option">
                  <a href="">
                    <span>
                      Login
                    </span>
                  </a>
                  <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
              <div>
                <div class="custom_menu-btn ">
                  <button>
                    <span class=" s-1"></span>
                    <span class="s-2"></span>
                    <span class="s-3"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <!-- end header section -->
      </div>
  
      <!-- category section -->
      <section class="category_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              Category
            </h2>
          </div>
          <div class="category_container">
            <div class="box" v-for="(item, index) in categories" :key="index">
              <div class="img-box">
                <img :src="item.image" :alt="item.name">
              </div>
              <div class="detail-box">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end category section -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryPage',
    data() {
      return {
        categories: [
          { name: 'Design & Arts', image: 'images/c1.png' },
          { name: 'Web Development', image: 'images/c2.png' },
          { name: 'SEO Marketing', image: 'images/c3.png' },
          { name: 'Video Editing', image: 'images/c4.png' },
          { name: 'Logo Design', image: 'images/c5.png' },
          { name: 'Game Design', image: 'images/c6.png' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Burada stil tanımlamalarını yapabilirsiniz */
  </style>
  