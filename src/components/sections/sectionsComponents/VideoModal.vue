<template>
  <div class="video_modal" @click="closePopup">
    <div class="container">
      <div class="modal_body">
        <iframe
          width="70%"
          height="70%"
          src="https://www.youtube.com/embed/2gUtfBmw86Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.video_modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #1a1a2d, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_body {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  iframe {
    @media (max-width: 991.98px) {
      width: 90%;
      height: 60%;
    }
    @media (max-width: 767.98px) {
      width: 90%;
      height: 50%;
    }
    @media (max-width: 575.98px) {
      width: 90%;
      height: 40%;
    }
    @media (max-width: 479.98px) {
      width: 90%;
      height: 30%;
    }
  }
}
button {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 4rem;
  position: absolute;
  top: 8rem;
  right: 16rem;
}
</style>
