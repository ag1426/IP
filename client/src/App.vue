<template>
  <v-app>
    <v-main style="background-color: #e8ded1">
     <page-header/>
    <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from './components/Header'

export default {
  name: 'App',
  components: {
    PageHeader
  },

  data () {
    return {

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
