import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();