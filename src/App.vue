<template>
  <div>
    <Navigation />
    <Content />
    <Footer />
  </div>
</template>

<script>
import NavigationVue from "./components/Navigation.vue";
import ContentVue from "./components/Content.vue";
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation: NavigationVue,
    Content: ContentVue,
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
