<template>
    <div class="container news">
        <h1>Newsletter</h1>
        <h4>Stay up to date with our latest news.</h4>
        <h4>
        <form>
            <input class= "textField" type="email" name="email" v-model="email" placeholder="Your email adress">
            <input class= "subscribeButton" type="button" @click="createContact()" value="Subscribe">
        </form></h4>
        <div class="popupWrap">
            <h5><span class="popup" id="emailPopup" :class="{'popup-active' : popupShow}" @click="popPopup()">Enter valid email!</span></h5>
        </div>
        <h5>Your email is safe with us, we don't spam.</h5>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "newsletter",
  data(){
      return{
      popupShow: null,
      email: '',
      };
  },
  methods: {
    sendData: function(){
        let formData = new FormData();
        formData.append('email', this.email)

        axios({
            method: 'post',
            url: 'api/emails.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
            //handle success
            response;
            this.resetForm();
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    },

    validateEmail: function(email){
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    },

    popPopup: function(){
        this.popupShow=false;
    },

    createContact: function(){
        var popup = document.getElementById("emailPopup");
        if (this.validateEmail(this.email)){
            this.sendData();
            popup.classList.remove("show");
            this.popupShow=false;
        } else {
            this.popupShow=true;
        }
    },
    resetForm: function(){
        this.email = '';
    },
  }
}
</script>

<style lang="scss" scoped>
.news{
    text-align: center;
    h1{
        color:var(--white-color);
        margin-bottom: 1rem;  
    }

    h4{
        color:var(--white-color);
        margin-bottom: 1rem;
    }

    h5{
        color: var(--blue-color);
        margin-bottom: 1rem;
    }

    form{

    .textField{
        font-size: 0.7em;
        border-radius: 999px;
        border-style: none;
        text-align: center;
        margin-right: 0.7em;
        padding: 0.4em 1em;
        background-color: var(--white-color);
    }

    .subscribeButton{
        border-radius: 999px;
        background-color: var(--red-color);
        color: var(--white-color);
        border-style: none;
        font-size: 0.7em;
        padding: 0.4em 2em;
        cursor: pointer;
        font-weight: 600;
    }
    .subscribeButton:hover{
        background-color: var(--red-color-darker);
    }

    .subscribeButton:active {
        transform: translateY(1px);
    }
    }  
}

.popupWrap{
    height: 0;
}

.popup {
  visibility: hidden;
  background-color: var(--red-color);
  color: var(--white-color);
  text-align: center;
  border-radius: 999px;
  padding: 0.2rem 1rem;
  bottom:0.3rem;
  right:18.5%;
  position: relative;
  z-index: 1;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
/* Popup arrow */
.popup::after {
content: "";
position: absolute;
bottom: 100%;
left: 50%;
margin-left: -0.5rem;
border-width: 0.5rem;
border-style: solid;
border-color: transparent transparent var(--red-color) transparent;
}

.popup-active{
visibility: visible;
-webkit-animation: fadeIn 1s;
animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
from {opacity: 0;} 
to {opacity: 1;}
}

@keyframes fadeIn {
from {opacity: 0;}
to {opacity:1 ;}
}

</style>