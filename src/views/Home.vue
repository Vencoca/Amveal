<template>
  <div class="home">
    <section id='Home' class="hero">
      <div class=" container hero-text">
        <h4>Diner app</h4>
        <hr style="color:white"/>
        <h2>
          Make hotel services easily accessible.
        </h2>
        <hr />      </div>
    </section>
    <section id="Application" class="app">
      <div class="left">
        <img src="@/assets/iphony.png" alt="" srcset="">
      </div>
      <div class="right">
        <h1>GET APP</h1>
        <h1 class="line">NOW</h1>
        <h1 class="red">SOON</h1>
        <img src="@/assets/buttons.png" alt="" srcset="">
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
    <section id="Newsletter" class="newsletter">
        <Newsletter/>
    </section>
  </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Newsletter from '../components/Newsletter.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Profile,
    Newsletter,
  },
};
</script>

<style lang="scss" scoped>

.hero {
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--light-green-color);

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    position: relative;
    top: 80px;
    height: calc(100vh - 80px);
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
}

.app{
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 550px) {
    padding-top: 0px;
    flex-direction: column;
  }
  .left{
    min-height: 100vh;
    width: 50%;
    background-color: var(--red-color);
    @media (max-width: 550px) {
      overflow: hidden;
      width: 100%;
    }
    overflow: visible;
    z-index: 3;
    img{
        position:relative;
        right:10%;
        bottom: 20%;
        height: 120%;
        width: 120%;
        object-fit: contain;
        padding: 10px;
        @media (max-width: 550px) {
          left:-15%;
          bottom: 20%;
          height: 130%;
          width: 130%;
        }
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 10%;
    top: 0;
    min-height: 100vh;
    width: 50%;
    background-color: var(--blue-color);
    color: var(--white-color);
    text-align: center;
    
    @media (max-width: 550px) {
      width: 100%;
    }

    .line {
      text-decoration: line-through;
      text-decoration-color: var(--red-color);
    }
    .red{
      transform: rotate(-25deg);
      top: -1em;
      left: 1em;
      position: relative;
      color: var(--red-color);

    }
    img{
      width: 13em;
      padding-bottom: 2em;
    }
  }
}

.team{
  min-height: 100vh;
  position: relative;
  background-color: var(--white-color);
  padding-bottom:65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    padding-top:60px;
    color:var(--blue-color);
    text-transform: uppercase;
  }

  .profile-list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    padding-top: 40px;
    @media (max-width: 550px) {
      padding-top: 0px;
      flex-direction: column;
    }
  }

  h2{
    margin-bottom: 1rem;
    text-align: center;
  }

  .profile-container{
    margin: 5px;
  }
}

.newsletter{
  background-color: var(--dark-green-color);
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  min-height: calc(var(--vh, 1vh) * 100 - 70px);
}
</style>
