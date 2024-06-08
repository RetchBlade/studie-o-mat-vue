<template>
    <footer class="container-fluid footer_section">
      <div class="container">
        <p>&copy; <span id="displayDate">{{ currentYear }}</span> Alle Rechte vorbehalten</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
    data() {
      return {
        currentYear : new Date().getFullYear()
      };
    },
  };
  </script>
  
  <style scoped>
    .footer_section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background-color: #fdfeff;
}

.footer_section p {
  color: #171717;
  margin: 0;
  padding: 25px 0 20px 0;
  margin: 0 auto;
  text-align: center;
}

.footer_section a {
  color: #171717;
}
    
  </style>
  