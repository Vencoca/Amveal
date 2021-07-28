<template>
    <div class="container Newsletter-flexbox">
        <div class="Newsletter-wrapper">
            <div class="circleWrap">
                <div class="circle">
                    <i class="far fa-envelope"></i>
                </div>
            </div>
            <h3>Newsletter</h3>
            <h5>Stay up to date with our latest news.</h5>
            <form>
                <input class= "textField" type="email" name="email" v-model="email" placeholder="Your email adress">
                <input class= "subscribeButton" type="button" @click="createContact()" value="Subscribe">
            </form>
            <div class="popupWrap">
                <span class="popup" id="emailPopup" :class="{'popup-active' : popupShow}" @click="popPopup()">Enter valid email!</span>
            </div>
            <p>Your email is safe with us, we don't spam.</p>
        </div>
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
            console.log(response)
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
        console.log(this.validateEmail(this.email))
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
.Newsletter-flexbox{
    display:flex;
    justify-content: center;
    text-align: center;
    margin-top: 38px;

    .Newsletter-wrapper{
    padding: 40px;
    border-radius: 25px;
    max-width: 700px;
    min-width: 220px;
    background-color: var(--secondary-color);
    width: 100%;
    }

    h3{
        font-size: 35px;
        font-weight: 900;
        color:var(--main-color);
        margin-bottom: 10px;  
        margin-top: -70px; 
    }

    h5{
        color:white;
        font-size: 18px;
        margin-bottom: 10px;
    }

    p{
        font-size: 14px;
        font-weight: 600;
        color: rgb(141, 141, 141);
    }

    form{
        
        .textField{
            font-size: 15px;
            border-radius: 10px;
            padding: 8px;
            padding-left: 12px;
            margin-right: 10px;
            border-style: none;
        }

        .subscribeButton{
            border-radius: 10px;
            background-color: var(--main-color);
            color: white;
            border-style: none;
            font-size: 15px;
            padding: 8px;
            margin-top: 10px;
            cursor: pointer;
        }
        .subscribeButton:hover{
            background-color: var(--main-color-darker);
        }

        .subscribeButton:active {
            transform: translateY(1px);
        }
    }

    .circleWrap{
        display: flex;
        justify-content: center;
    }
    .circle{
        width: 76px;
        height: 76px;
        border-radius: 50%;
        position: relative;
        top: -78px;
        background: linear-gradient(220deg, rgb(20, 20, 177) 2%, var(--main-color) 70%);
        display: flex;
        align-items: center;
        justify-content: center;
        outline-color: white;
        outline-style: solid;
        outline-offset: -6px;
        outline-width: 2px;
        
        i{
            color: white;
            font-size: 35px;
        }
    }
}


.popup {
  visibility: hidden;
  background-color: rgb(189, 66, 66);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 5px;
  position: relative;
  z-index: 1;
  left: -50px;
  top: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media(max-width: 469px) {
    .popup{
        left:0px;
        top: -115px;
    }
    .popup::after {
        border-color:  rgb(189, 66, 66) transparent transparent transparent !important;
        top: 100%;
    }
    .textField{
        text-align: center;
    }
    .subscribeButton{
        width: 120px;
    }
  }
/* Popup arrow */
.popup::after {
content: "";
position: absolute;
bottom: 100%;
left: 50%;
margin-left: -5px;
border-width: 5px;
border-style: solid;
border-color:   transparent transparent rgb(189, 66, 66) transparent;
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