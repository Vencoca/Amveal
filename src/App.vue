<template>
  <div class="app">
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
export default {
  name: "App",
  components:{
    Navigation
  },
  created () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
};
</script>

<style >
  :root{
    --blue-color: #36424e;
    --dark-green-color: #3c7072;
    --light-green-color: #498989;
    --red-color: #e53c49;
    --red-color-darker: #a82832;
    --white-color: #ddd9d1;
    --logo-size: 50px;
  }

@media screen and (max-width: 750px){
  h1{ font-size: 50px;font-weight: 800;font-style: italic;}
  h2{ font-size: 35px;font-weight: 800;font-style: italic;}
  h3{ font-size: 35px;font-weight: 600;}
  h4{ font-size: 18px;font-weight: 400;}
  h5{ font-size: 14px; font-weight: 400;}
  :root{font-size: 16px;}
}

@media screen and (min-width: 750px){
  h1{ font-size: 110px;font-weight: 800;font-style: italic;}
  h2{ font-size: 40px;font-weight: 800;font-style: italic;}
  h3{ font-size: 40px;font-weight: 600;}
  h4{ font-size: 38px;font-weight: 400;}
  h5{ font-size: 32px; font-weight: 400;}
  :root{font-size: 24px;}
}   
</style>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}


</style>
