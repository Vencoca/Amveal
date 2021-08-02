<template>
  <header :class="{'scrolled-nav' : scrolledNav}">
    <nav>
      <div class="branding">
        <a @click='scroll("Home");'><img src="@/assets/logo.svg" alt="" srcset=""></a>
      </div>
      <ul v-show = "!mobile" class="navigation">
        <li><a class="link active" onclick="event.preventDefault()" @click='scroll("Home");' href="#Home">Home</a></li>
        <li><a class="link" onclick="event.preventDefault()" @click='scroll("Team");' href="#Team">Team</a></li>
        <li><a class="link" onclick="event.preventDefault()" @click='scroll("Newsletter");' href="#Newsletter">Newsletter</a></li>
      </ul>
    <div class="icon">
      <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show = "mobileNav" class="dropdown-nav">
        <li><a class="link active" onclick="event.preventDefault()" @click='scroll("Home");' href="#Home">Home</a></li>
        <li><a class="link" onclick="event.preventDefault()" @click='scroll("Team");' href="#Team">Team</a></li>
        <li><a class="link" onclick="event.preventDefault()" @click='scroll("Newsletter");' href="#Newsletter">Newsletter</a></li>
      </ul>
    </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return{
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    scroll(element){  
      document.getElementById(element).scrollIntoView(true); 
      this.mobileNav = false;
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    updateScroll() {
      const scrollPosition = window.scrollY
      var sections = document.getElementsByTagName('section');
      sections.forEach(element => {
        if (element.offsetTop <= scrollPosition) {
          document.querySelectorAll('.active').forEach(function(element){
            element.setAttribute('class', 'link');
          })
          document.querySelectorAll('a[href*=' + element.id + ']').forEach(function(element) {
            element.setAttribute('class', 'active link');
          })
          console.log(document.querySelector('a[href*=' + element.id + ']'))
        } else if (element.id == "Newsletter"){
          if (element.offsetTop <= scrollPosition + 70) {
            document.querySelectorAll('.active').forEach(function(element){
              element.setAttribute('class', 'link');
            })
            document.querySelectorAll('a[href*=' + element.id + ']').forEach(function(element) {
              element.setAttribute('class', 'active link');
            })
          }
        }
      });

      if(scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },
  }
};

(function() {
  'use strict';

  

  window.onscroll = function() {
    
  };
})();
</script>

<style lang="scss" scoped>


header{
  background-color: var(--blue-color);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  a{
   cursor: pointer; 
   -webkit-user-select: none;  /* Chrome all / Safari all */
   -moz-user-select: none;     /* Firefox all */
   -ms-user-select: none;      /* IE 10+ */
   user-select: none;          /* Likely future */     
  }
  
  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    user-select: none;  
    @media(min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link{
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link{
      font-size: 14px;
      transition: 0.5 ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover{
        cursor: pointer;
        color: var(--red-color);
        border-color: var(--red-color);
      }
    }

    .active{
      cursor: pointer;
      font-size: 14px;
      color: var(--red-color) !important;
      border-color: var(--red-color) !important;
    }

    .branding {
      display: flex;
      align-items: center;
      img{
        width: var(--logo-size);
        transition: 0.5s ease all;
      }
    }

    .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }
    
    .icon{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i{
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active{
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
    }

    .dropdown-nav{ 
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color:  #fff;
      top: 0;
      left: 0;


      li{
        margin-left: 0;
        .link {
          color: #000; 
        }
      }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
      -webkit-transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0);
      -webkit-transform: translateX(0);
    }
  }
}
.scrolled-nav {
  background-color:  transparent;
  nav{
    padding: 8px 0;
    .branding {
      img{
        width: 40px;
        filter: invert(1);
      }
    }
    i{
      filter: invert(1);
    }
    .link{
      color: var(--blue-color);
    }
  }
}
</style>
