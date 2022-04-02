<template>
  <div class="container faq">
      <div class="flex">
        <h1>FAQ</h1>
        <h5>Got questions? We've got answers.</h5>
      </div>
      <div class="questions">
          <div class="one">
              <p class="header">How does it work?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque voluptates illo amet exercitationem esse reprehenderit dignissimos laboriosam facilis? Accusantium!</p>
            
          </div>
        <div class="two">
            <p class="header">What is this?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente labore harum dolorum laborum quisquam laboriosam. Reiciendis repellat quam eos.</p>
        </div>
        <div class="three">
            <p class="header">Who is this?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe consectetur iste sapiente totam laudantium vel in doloremque nesciunt ipsam!</p>
        </div>
        <div class="four">
            <p class="header">How is this?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam pariatur autem cumque aliquam atque eveniet blanditiis, nulla repellat vel esse, corporis nostrum mollitia.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.faq{
    min-height: 100vh;
    color: var(--white-color);
}
.flex{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    margin-top: 1rem;
}
h5{
    margin-bottom: 1rem;
}
.questions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    div{
        padding: 3rem;
        padding-bottom: 4.5rem;
        .header{
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
    }
}
 @media (max-width: 550px) {
     .questions{
         grid-template-columns: 1fr;
     }
 }
</style>