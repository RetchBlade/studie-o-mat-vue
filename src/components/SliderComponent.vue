<template>
    <section class="slider_section">
      <div class="carousel_btn-container">
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1">
                  <div class="detail-box">
                    <h1><br>Dein Studienweg beginnt hier!<br></h1>
                    <p>Finde den Studiengang, der zu dir passt.</p>
                    <div class="btn-box">
                      <a href="" class="btn-1">Zum Studienwahltest</a>
                      <a href="" class="btn-2">Erfahre mehr</a>
                    </div>
                  </div>
                </div>
                <div class="offset-md-1 col-md-4 img-container">
                  <div class="img-box">
                    <img src="../assets/studenten.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1">
                  <div class="detail-box">
                    <h1><br>Welches Studium passt zu mir?<br></h1>
                    <p>Um das passende Studium für sich zu finden, ist es wichtig, zunächst Ihre Interessen und Leidenschaften zu erkunden. Welche Themen faszinieren Sie? Welche Aktivitäten machen Ihnen Spaß? Indem Sie sich selbst diese Fragen stellen, können Sie eine grundlegende Richtung für Ihre Studienwahl festlegen.</p>
                    <div class="btn-box">
                      <a href="" class="btn-1">Zum Studienwahltest</a>
                      <a href="" class="btn-2">Erfahre mehr</a>
                    </div>
                  </div>
                </div>
                <div class="offset-md-1 col-md-4 img-container">
                  <div class="img-box">
                    <img src="../assets/poster-studium-definition.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5 offset-md-1">
                  <div class="detail-box">
                    <h1><br>Erkennen Sie Ihre Fähigkeiten und Stärken<br></h1>
                    <p>Jeder hat unterschiedliche Talente. Das Erkennen Ihrer eigenen Fähigkeiten und Stärken wird Ihnen helfen zu verstehen, welche Karriere zu Ihnen passt. In welchen Bereichen sind Sie gut? Welche Fähigkeiten besitzen Sie? Indem Sie diese Fragen beantworten, können Sie eine solide Grundlage für die richtige Karrierewahl schaffen.</p>
                    <div class="btn-box">
                      <a href="" class="btn-1">Zum Studienwahltest</a>
                      <a href="" class="btn-2">Erfahre mehr</a>
                    </div>
                  </div>
                </div>
                <div class="offset-md-1 col-md-4 img-container">
                  <div class="img-box">
                    <img src="../assets/2822114-studenten-sehen-gelangweilt-beim-lernen-handgezeichneten-stil-design-illustrationen-kostenlos-vektor.jpg" alt="">
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
    name: 'SliderComponent'
  }
  </script>
  
  <style scoped>
    .slider_section {
      background-color: #DADBED;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
}

.slider_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.slider_section .row > div {
  position: unset;
}

.slider_section .detail-box h1 {
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
}

.slider_section .detail-box p {
  color: #ffffff;
  margin-top: 15px;
}

.slider_section .detail-box .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin: 45px -5px 0 -5px;
}

.slider_section .detail-box .btn-box a {
  text-align: center;
  width: 165px;
  font-size: 15px;
  margin: 5px;
}

.slider_section .detail-box .btn-box .btn-1 {
  display: inline-block;
  padding: 10px 0;
  background-color: #ff4f5a;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
}

.slider_section .detail-box .btn-box .btn-1:hover {
  background-color: transparent;
  border-color: #ff4f5a;
  color: #ff4f5a;
}

.slider_section .detail-box .btn-box .btn-2 {
  display: inline-block;
  padding: 10px 0;
  background-color: #ffffff;
  color: #252525;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
}

.slider_section .detail-box .btn-box .btn-2:hover {
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
}

.slider_section .img-container .img-box img {
  width: 100%;
  max-height: 408px;
}

.slider_section #carouselExampleIndicators {
  position: unset;
  width: 100%;
}

.slider_section .carousel_btn-container {
  width: 120px;
  position: absolute;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  left: 8.5%;
  z-index: 999;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.slider_section .carousel_btn-container .carousel-control-prev,
.slider_section .carousel_btn-container .carousel-control-next {
  position: relative;
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 100%;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: center;
  background-color: #1cbbb4;
  margin: 2px;
}

.slider_section .carousel_btn-container .carousel-control-prev:hover,
.slider_section .carousel_btn-container .carousel-control-next:hover {
  background-color: #ff4f5a;
}

.slider_section .carousel_btn-container .carousel-control-prev {
  background-image: url('../assets/prev.png');
}

.slider_section .carousel_btn-container .carousel-control-next {
  background-image: url('../assets/next.png');
}

.slider_section ol.carousel-indicators {
  margin: 0;
  width: 75px;
  bottom: 45px;
  left: initial;
  right: 25px;
}

.slider_section ol.carousel-indicators li {
  border-radius: 100%;
  text-indent: 0px;
  text-align: center;
  line-height: 55px;
  color: #ffffff;
  background-color: transparent;
  opacity: 1;
  display: none;
}

.slider_section ol.carousel-indicators li.active {
  display: block;
}
  </style>
  