<template>
  <v-app id="inspire" style="background-color: #e8ded1">
       <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-5 brown--text text--lighten2"
                        >Fill in the details of your product to sell</h1>
                        <div class="text-center mt-4">
                        </div>
                        <v-form encType="multipart/form-data">
                          <v-text-field
                            label="Title"
                            reqired
                            :rules="[required]"
                            v-model= "product.title"
                            prepend-icon="mdi-email"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Brand"
                            reqired
                            :rules="[required]"
                            v-model= "product.brand"
                            prepend-icon="mdi-lock"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Description"
                            reqired
                            :rules="[required]"
                            v-model= "product.description"
                            prepend-icon="mdi-lock"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Price"
                            reqired
                            :rules="[required]"
                            v-model= "product.price"
                            prepend-icon="mdi-lock"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Size"
                            reqired
                            :rules="[required]"
                            v-model= "product.size"
                            prepend-icon="mdi-lock"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-file-input
                             label="Upload an image of your product"
                             reqired
                            :rules="[required]"
                             filled
                             type = "file"
                             v-model= "product.image"
                             prepend-icon="mdi-camera"
                             color="brown lighten-2"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3 pb-5">
                        <div class="danger-alert" v-if="error">
                             {{error}}
                        </div>
                        <br>
                        <v-btn rounded color="brown lighten-2" @click= "sell" dark>Sell</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="brown lighten-5">
                     <v-img alt="" elevation="4" src="../assets/mainpage.jpg" height="100%" width="120%" />
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
       </v-container>
  </v-app>
</template>

<script>
import ProductsService from '@/services/ProductsService'

export default {
  data () {
    return {
      product: {
        title: null,
        brand: null,
        description: null,
        price: null,
        size: null,
        image: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async sell () {
      const areAllFieldsFilledIn = Object
        .keys(this.product)
        .every(key => !!this.product[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await ProductsService.post(this.product)
        this.$router.push({
          name: 'products'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
.danger-alert{
  color: red;
}
</style>
