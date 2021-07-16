<template>
<v-app style="background-color: #e8ded1">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="brown lighten-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="navigateTo({ name: 'login' })">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 brown--text text--lighten-2">Create Account</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                            label="Full name"
                            v-model= "fullName"
                            prepend-icon="mdi-account"
                            type="text"
                            color="brown lighten-2"
                          />
                          <v-text-field
                            label="Email"
                            v-model= "email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Phone Number"
                           v-model= "phoneNumber"
                            prepend-icon="mdi-phone"
                            type="text"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Password"
                            v-model= "password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            label="Re-type your password"
                            v-model= "confirmPassword"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="brown lighten-2"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 pb-5">
                          <br>
                          <div class="danger-alert" v-html= "error" />
                          <br>
                        <v-btn rounded color="brown lighten-2" @click="register" dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      confirmPassword: '',
      error: null,
      message: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          fullName: this.fullName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
