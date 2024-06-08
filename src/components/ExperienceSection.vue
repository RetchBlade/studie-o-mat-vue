<template>
    <section class="experience_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="img-box">
              <img src="/studi_o_mat/public/images/experience-img.jpg" alt="">
            </div>
          </div>
          <div class="col-md-7">
            <div class="detail-box">
              <div class="heading_container">
                <h2>
                  "Finde deinen Weg, wähle dein Studium!"
                </h2>
              </div>
              <p>
                Studium O-Mat ist dein verlässlicher Partner bei der Studienwahl und eine Partnerwebseite der Hochschule Bochum. Mit unserem innovativen Online-Test kannst du deine Interessen und Stärken analysieren und die Studiengänge finden, die perfekt zu dir passen. 
                Darüber hinaus bieten wir detaillierte Informationen zu den Studiengängen der Hochschule Bochum. Wir unterstützen dich dabei, die richtige Entscheidung für deine akademische und berufliche Zukunft zu treffen. Starte noch heute und entdecke die vielfältigen Möglichkeiten an der Hochschule Bochum. 
                Lass uns gemeinsam deinen Weg gestalten!
              </p>
              <div class="btn-box">
                <a href="" class="btn-1">Read More</a>
                <a href="" class="btn-2">Hire</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ExperienceSection',
  
  }
  </script>
  
  <style scoped>
    
.experience_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.experience_section .detail-box p {
  margin-top: 20px;
}

.experience_section .detail-box .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin: 45px -5px 0 -5px;
}

.experience_section .detail-box .btn-box a {
  text-align: center;
  width: 165px;
  font-size: 15px;
  margin: 5px;
}

.experience_section .detail-box .btn-box .btn-1 {
  display: inline-block;
  padding: 10px 0;
  background-color: #ff4f5a;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
}

.experience_section .detail-box .btn-box .btn-1:hover {
  background-color: transparent;
  border-color: #ff4f5a;
  color: #ff4f5a;
}

.experience_section .detail-box .btn-box .btn-2 {
  display: inline-block;
  padding: 10px 0;
  background-color: #1a2e35;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
}

.experience_section .detail-box .btn-box .btn-2:hover {
  background-color: transparent;
  border-color: #1a2e35;
  color: #1a2e35;
}

.experience_section .img-box img {
  width: 100%;
}
  </style>
  