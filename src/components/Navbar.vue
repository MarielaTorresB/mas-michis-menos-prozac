<template>
  <div>
     <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="../assets/huella.png"
              alt="Huella de gato"
            >
          </b-navbar-item>
          <a class="navbar-item" href="#" style="font-weight:bold;">
            Más michis, menos prozac
          </a>
          <span class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <a href="#" class="navbar-item is-active"><router-link to="/cats">Home</router-link></a>
            <a href="#" class="navbar-item"><router-link to="/about">About</router-link></a>
            <a href="#" class="navbar-item"><router-link to="/favoritos"> Favoritos</router-link></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted: function() {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('#'+burger.dataset.target);
        burger.addEventListener('click', function(){
          burger.classList.toggle('is-active');
          nav.classList.toggle('is-active');
        });
      }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
</style>