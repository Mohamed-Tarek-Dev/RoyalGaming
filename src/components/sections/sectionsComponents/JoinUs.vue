<template>
  <div class="join_us">
    <div class="container">
      <h2>
        <img src="../../../assets/images/icons/bullets.png" alt="bullets" />
        <span>Sell Your games safely</span>
      </h2>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="content">
            <div class="description">
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam molestiae officia qui et eius corrupti laboriosam.
              </p>
            </div>
            <div class="icons">
              <div class="icon" v-for="icon in icons" :key="icon.id">
                <img :src="icon.img" :alt="icon.id" />
                <span>{{ icon.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="video">
            <div class="video_img">
              <img
                src="../../../assets/images/backgrounds/join.jpg"
                alt="Video Img"
              />
            </div>
            <div class="video_icon">
              <button @click.self="modalShow">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="modal">
    <VideoModal v-if="showModal" @closePopup="modalShow" />
  </transition>
</template>

<script>
import VideoModal from "@/components/sections/sectionsComponents/VideoModal";
export default {
  components: {
    VideoModal,
  },
  data() {
    return {
      icons: [
        {
          img: require("@/assets/images/icons/check-list.png"),
          title: "Register with us",
          id: 1,
        },
        {
          img: require("@/assets/images/icons/games.png"),
          title: "Add your games",
          id: 2,
        },
        {
          img: require("@/assets/images/icons/money.png"),
          title: "Get your cash",
          id: 3,
        },
      ],
      showModal: false,
    };
  },
  methods: {
    modalShow() {
      this.showModal = !this.showModal;
      if (this.showModal == true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.join_us {
  position: relative;
  background: url(../../../assets/images/backgrounds/shapes.png);
  background-color: #1a1a2d;
  height: 100%;
  margin-top: 5rem;
  padding: 5rem 0 12rem;
  @media (max-width: 767.98px) {
    padding: 2.5rem 0 10rem;
  }
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  span {
    font-size: 4rem;
    margin: 0 1rem;
    @media (max-width: 767.98px) {
      font-size: 2.4rem;
    }
  }
}

.row {
  margin-top: 10rem;
  @media (max-width: 991.98px) {
    margin: 3rem 0;
  }
}

.content {
}

.description {
  p {
    font-size: 2rem;
    color: #fff;
  }
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem 3rem;
  margin-top: 16rem;
  @media (max-width: 991.98px) {
    margin: 3rem 0;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    margin-top: 5rem;
  }
  .icon {
    text-align: center;
    img {
      width: 8rem;
      height: 8rem;
    }
    span {
      display: block;
      font-size: 1.6rem;
      color: #fff;
      margin-top: 2rem;
    }
  }
}

.video {
  position: relative;
  border: 3px double rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  .video_img {
    img {
      width: 100%;
      border-radius: 1.5rem;
    }
  }
  .video_icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 45, 0.6);
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background: transparent;
      border: none;
      background: #fb9209;
      padding: 1.2rem;
      text-align: center;
      border-radius: 50%;
      position: relative;
      i {
        font-size: 2.5rem;
        color: #fff;
        transform: translateX(0.2rem);
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(251, 146, 9, 0.2);
        width: 100px;
        height: 100px;
        animation-delay: 0.5s;
        -webkit-animation-delay: 0.5s;
        -moz-animation-delay: 0.5s;
        -webkit-border-radius: 33.33% 50%;
        -moz-border-radius: 33.33% 50%;
        border-radius: 33.33% 50%;
        animation: videoPlay 6s linear infinite;
        transition: all ease 0.3s;
      }
      &::after {
        background: rgba(251, 146, 9, 0.4);
        height: 73px;
        width: 73px;
        animation: videoPlay 4s linear infinite;
        transition: all ease 0.3s;
      }
    }
  }
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: 0.3s ease;
}
@keyframes videoPlay {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
