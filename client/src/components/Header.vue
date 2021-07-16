<template class="darks">
    <v-toolbar dark>
        <v-toolbar-title class="mr-5">
            <router-link to="/">
            <v-img
                contain
                lazy-src="../assets/logo12.png"
                max-height="70"
                max-width="90"
                src="../assets/logo12.png"
            >
             </v-img>
            </router-link>
        </v-toolbar-title>
        <v-toolbar-items>
        <v-btn text dark :to="{name:'products'}">Browse
        </v-btn>
    </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn text dark :to="{name:'sell'}">Sell
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn text v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name:'login'})"><span> <v-icon> mdi-login </v-icon>
           Login
           </span>
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn text v-if="$store.state.isUserLoggedIn" @click="logout">
           Logout
        </v-btn>
    </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    }
  }

}
</script>

<style scoped>

</style>
