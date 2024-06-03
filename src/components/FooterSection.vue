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
        currentYear: ''
      };
    },
    mounted() {
      this.getCurrentYear();
    },
    methods: {
      getCurrentYear() {
        const year = new Date().getFullYear();
        this.currentYear = year;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gerekirse bileşen özel CSS stilleri buraya eklenebilir */
  </style>
  