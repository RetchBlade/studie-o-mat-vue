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
                    <img src="images/studenten.jpg" alt="">
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
                    <img src="images/poster-studium-definition.jpg" alt="">
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
                    <img src="images/2822114-studenten-sehen-gelangweilt-beim-lernen-handgezeichneten-stil-design-illustrationen-kostenlos-vektor.jpg" alt="">
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
  /* Add your styles here */
  </style>
  