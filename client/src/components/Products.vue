<template>
<div class="row">
 <div class="col-sm-3 py-2" v-for="product in products" :key="product.id">
<v-card
  elevation="10"
  color="brown lighten-2"
  :loading="loading"
  class="mx-auto my-4"
  max-width="374"
>
<v-img v-bind:src="product.image" />
<v-card-title class="h1 justify-center" >{{product.title}} </v-card-title>
<v-card-text class="text-left">Brand: {{product.brand}} </v-card-text>
<v-card-text class="text-left">Description: {{product.description}}</v-card-text>
<v-card-text class="text-left">Price: {{product.price}}</v-card-text>
<v-card-text class="text-left">Size: {{product.size}}</v-card-text>
<v-card-actions class="justify-center"> <v-btn color="#e8ded1">Add to cart </v-btn></v-card-actions>
</v-card>
 </div>
</div>
</template>

<script>
import ProductsService from '@/services/ProductsService'

export default {
  components: {

  },
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    this.products = (await ProductsService.getSongs()).data
  }
}
</script>
<style scoped>
.row{
  margin-left: 1%;
  margin-right: 1%;
}
</style>
