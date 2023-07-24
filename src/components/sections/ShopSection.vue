<template>
  <section class="shop_section">
    <div class="container">
      <WelcomeSection />
      <BestGames />
      <HowToUse />
    </div>
    <JoinUs />
  </section>
</template>

<script>
import WelcomeSection from "../sections/sectionsComponents/WelcomeSection";
import BestGames from "../sections/sectionsComponents/BestGames";
import HowToUse from "../sections/sectionsComponents/HowToUse";
import JoinUs from "../sections/sectionsComponents/JoinUs";
export default {
  name: "ShopSection",
  components: {
    WelcomeSection,
    BestGames,
    HowToUse,
    JoinUs,
  },
};
</script>

<style lang="scss" scoped>
.shop_section {
  background: url(../../assets/images/backgrounds/main-back.jpg);
  height: 100%;
  margin-top: -9.5rem;
  padding: 18rem 0 0;
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: -14.5rem;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    margin-top: -10.5rem;
  }
}
</style>
