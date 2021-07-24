<template>
<div class="profile-container">
  <div class="transition">   <!-- Workaround for jiggly image in firefox -->
      <div class="translate3d">
        <img :src="require(`@/assets/profiles/${imglink}`)" alt="" srcset="" class="img">
      </div>
  </div>
  <div class="name">
    <h3>{{firstname}}<br>{{lastname}}</h3>
    <h5>{{job}}</h5>
  </div>
  <div class="hidden main-color">
    <div class="imgbox">
      <img v-for="land in lands" :key="land" :src="'https://hatscripts.github.io/circle-flags/flags/'+ land +'.svg'" width="30">
    </div>
    <p>{{email}}</p>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'Profile',
  props:{
    firstname: String,
    lastname: String,
    job: String,
    imglink: String,
    lands: Array,
    email: String,
  },
};
</script>

<style lang="scss" scoped>
.profile-container{
    position: relative;
    margin: 0 5px;
    overflow: hidden;
    width: 270px;
    height: 380px;
}
.img {
  opacity: 1;
  display: block;
  width: 270px;
  backface-visibility: hidden;
  height: 380px;
  object-fit: cover;
  
}

.transition{
  transition: all 4s ease;
}

.translate3d {
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
}

.profile-container:hover .transition {
  transform: scale(1.3);
}

.profile-container:hover .hidden {
  opacity: 1;
  transform: translateY(-100px);
}

.profile-container:hover .name {
  transform: translateY(-100px);
}

.name{
    transition: .7s ease;
    position: absolute;
    bottom: 0;
    padding: 7%;
    padding-bottom: 5%;
    color: #fff;
    text-shadow: 1px 1px 1px #000000;
    h3{
      text-transform: uppercase;
      font-size: 18px;
      border-bottom: #fff solid 1px;
      font-weight: 600;
    }
    h5{
      font-size: 15px;
      font-weight: 600;
    }
}

.hidden {
  transition: .5s ease;
  opacity: 0;
  width: 100%;
  position: absolute;
  bottom: -100px;
  padding: 7%;
  padding-bottom: 5%;
  height: 100px;
  background-color: rgb(53, 142, 187);
  text-align: center;
  img{
    margin: 0 5px;
  }
  .imgbox{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 5px; 
  }
}
</style>