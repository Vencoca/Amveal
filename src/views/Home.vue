<template>
  <div class="home">
    <section id='Home' class="hero">
      <div class=" container hero-text">
        <h4>Diner app</h4>
        <hr style="color:white"/>
        <h2>
          Make hotel services easily accessible.
        </h2>
        <hr />
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



.newsletter{
  background-color: var(--dark-green-color);
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
}

.team{
  min-height: 100vh;
  padding: 40px;
  position: relative;
  background-color: var(--white-color);
  padding-bottom:65px;

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


.hero {
  position: relative;
  height: 100vh;
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
