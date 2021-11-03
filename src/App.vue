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
// import HomeVue from "./view/home.vue";
export default {
  name: "App",
  components: {
    Navigation: NavigationVue,
    Footer: FooterVue,
    // Home: HomeVue,
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
