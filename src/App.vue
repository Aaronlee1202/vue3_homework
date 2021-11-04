<template>
  <div>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavigationVue from "./components/Navigation.vue";
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation: NavigationVue,
    Footer: FooterVue,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  background-color: #f7f9fb;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
