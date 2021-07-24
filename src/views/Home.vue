<template>
  <div class="home">
    <section id='Home' class="hero">
      <div class="hero-text container">
        <h4>Diner app</h4>
        <hr />
        <h2>
          How did you live without it?
        </h2>
        <hr />
      </div>
      <div class="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
    <section id="Team" class="team">
      <h2>Our Team</h2>
      <div class="profile-list">
        <Profile firstname="Václav" lastname="Kesler" job="Front-end devloper" imglink="1.jpg" email="kesler@dinerapp.net" v-bind:lands="['cz','gb','de','pl']"/>
        <Profile firstname="Sandra" lastname="Walentynowicz" job="Graphic designer" imglink="2.jpg" email="walentynowicz@dinerapp.net" v-bind:lands="['pl','gb']"/> 
        <Profile firstname="Jan" lastname="Paleček" job="Bussiness" imglink="3.jpg" email="palecek@dinerapp.net" v-bind:lands="['cz','gb','pl']"/> 
      </div>
    </section>
  </div>
</template>

<script>
import Profile from '../components/Profile.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Profile
  },
};
</script>

<style lang="scss" scoped>
.team{
  padding: 40px;
  position: relative;

  .profile-list{
    display: flex;
    justify-content: center;
    @media (max-width: 750px) {
      flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }

  h2{
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
     @media (min-width: 550px) {
        font-size: 40px;
    }
  }

  .profile-container{
    @media (max-width: 750px) {
        margin: 5px;
    }
  }
}

.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: calc(100vh + 55px);

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 75px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
  .wave-divider {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
  }

  .wave-divider svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 55px;
  }

  .wave-divider .shape-fill {
      fill: #f1f1f1;
  }
}
</style>
