<template>
  <Header />
  <ShopSection />
</template>

<script>
import Header from "../components/layouts/Header";
import ShopSection from "../components/sections/ShopSection";
export default {
  name: "Home",
  components: {
    Header,
    ShopSection,
  },
};
</script>
