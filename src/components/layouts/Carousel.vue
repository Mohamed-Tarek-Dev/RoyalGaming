<template>
  <agile :options="options">
    <div class="slide" v-for="slide in slides" :key="slide.id">
      <div class="overlay"></div>
      <img :src="slide.src" :alt="slide.id" />
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      options: {
        dots: false,
        navButtons: false,
        pauseOnHover: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        slidesToShow: 1,
        speed: 1000,
      },
      slides: [
        {
          src: require("@/assets/images/backgrounds/back1.jpg"),
          id: 1,
        },
        {
          src: require("@/assets/images/backgrounds/back2.jpg"),
          id: 2,
        },
        {
          src: require("@/assets/images/backgrounds/back3.jpg"),
          id: 3,
        },
        {
          src: require("@/assets/images/backgrounds/back4.jpg"),
          id: 4,
        },
        {
          src: require("@/assets/images/backgrounds/back5.jpg"),
          id: 5,
        },
        {
          src: require("@/assets/images/backgrounds/back6.jpg"),
          id: 6,
        },
        {
          src: require("@/assets/images/backgrounds/back7.jpg"),
          id: 7,
        },
        {
          src: require("@/assets/images/backgrounds/back8.jpg"),
          id: 8,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.agile__slide {
}
.agile {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .agile__slide {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: pixelated;
    }
  }
}
.slide {
  user-select: none;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
  }
}
</style>
