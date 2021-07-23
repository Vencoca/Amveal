<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Hero section</h4>
        <hr />
        <h2>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit.
        </h2>
        <hr />
      </div>
    </section>
    <section id="team" class="team">
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
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
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
        font-size: 80px;
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
}
</style>
