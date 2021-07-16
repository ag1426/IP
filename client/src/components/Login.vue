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
                          class="text-center display-2 brown--text text--lighten2"
                        >Sign in to Bottom Drawer</h1>
                        <div class="text-center mt-4">
                        </div>
                        <h4 class="text-center mt-4 pb-3">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            v-model= "email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="brown lighten-2"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            v-model= "password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="brown lighten-2"
                            acutocomplete="new-password"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3 pb-5">
                        <div class="danger-alert" v-html="error" />
                        <br>
                        <v-btn rounded color="brown lighten-2" @click= "login" dark>Login</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="brown lighten-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="navigateTo({ name: 'register' })" >SIGN UP</v-btn>
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
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
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
