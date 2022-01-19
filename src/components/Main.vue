<template>
  <div class="container ">
    <div class="text-align-center">
      <p class="alert alert-secondary">
        Generate valid credit card numbers with required details such as Name, Address, Expiry, Money, PIN, and CVV code.
      </p>
      <button class="btn btn-danger px-5 my-2" @click="show()">
        <i class="fa fa-cog"></i>
        <span class="px-2">GENERATE</span>
      </button>
    </div>
    <div class="container">
      <div class="row mx-1 my-3">
        <Card />
      </div>
    </div>

  </div>
</template>

<script>
import Card from "./Card.vue"
import { gusPhoto } from "../assets/js/Methods.js"

export default {
  components: {
    Card
  },
  methods: {
    show(){
    const card = document.querySelector("._card");
    card.style.backgroundImage = `url(${gusPhoto()})`
    }
  }

}
</script>

<style>

</style>