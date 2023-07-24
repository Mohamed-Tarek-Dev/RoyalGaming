<template>
  <router-view />
  <Navbar />
  <Footer />
</template>

<script>
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
export default {
  components: { Navbar, Footer },
};
</script>

<style lang="scss">
#app {
  font-family: "Almarai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow-x: hidden;
}
</style>
