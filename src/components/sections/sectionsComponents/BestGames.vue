<template>
  <div class="best_games">
    <h2>
      <img src="../../../assets/images/icons/bullets.png" alt="" />
      <span>The best selling games</span>
    </h2>
    <div class="best_games">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4" v-for="shopItem in shopItems" :key="shopItem.id">
          <div class="shop_item">
            <div class="discount" v-if="shopItem.discount">
              <div class="shape1"></div>
              <span>{{ shopItem.discount }}</span>
              <div class="shape2"></div>
            </div>
            <div class="item_back">
              <img :src="shopItem.img" :alt="shopItem.id" />
            </div>
            <div class="item_info">
              <div class="name">
                <h3>{{ shopItem.title }}</h3>
                <span>Starts with {{ shopItem.price }}</span>
              </div>
              <div class="buy_btn">
                <a>Buy now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="show_more_btn">
            <a>Show more games</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestGames",
  data() {
    return {
      shopItems: [
        {
          img: require("@/assets/images/shop/back1.jpg"),
          title: "Star Wars",
          price: "33$",
          id: 1,
          discount: "50% OFF",
        },
        {
          img: require("@/assets/images/shop/back2.jpg"),
          title: "Battlefield5",
          price: "45$",
          id: 2,
        },
        {
          img: require("@/assets/images/shop/back3.jpg"),
          title: "Control",
          price: "30$",
          id: 3,
          discount: "75% OFF",
        },
        {
          img: require("@/assets/images/shop/back4.jpg"),
          title: "Cyberpunk 2077",
          price: "85$",
          id: 4,
        },
        {
          img: require("@/assets/images/shop/back5.jpg"),
          title: "The Witcher 3",
          price: "25$",
          id: 5,
          discount: "90% OFF",
        },
        {
          img: require("@/assets/images/shop/back6.jpg"),
          title: "Death Stranding",
          price: "99$",
          id: 6,
          discount: "30% OFF",
        },
        {
          img: require("@/assets/images/shop/back7.jpg"),
          title: "Sekiro Shadows",
          price: "65$",
          id: 7,
        },
        {
          img: require("@/assets/images/shop/back8.jpg"),
          title: "Assassin's Creed",
          price: "90$",
          id: 8,
          discount: "25% OFF",
        },
        {
          img: require("@/assets/images/shop/back9.jpg"),
          title: "Last Of Us 2",
          price: "80$",
          id: 9,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 5rem 0 2rem;

  span {
    font-size: 4rem;
    margin: 0 1rem;

    @media (max-width: 767.98px) {
      font-size: 2.4rem;
    }
  }
}

.row {
  gap: 1.6rem 0;
}

.shop_item {
  position: relative;
  display: flex;
  align-items: flex-end;
  color: #fff;
  height: 100%;
  margin-top: 2rem;
  transition: 0.3s linear;
  border-radius: 2rem;

  &:hover {
    .item_back {
      img {
        transform: scale(1.1);
      }
    }
  }

  .discount {
    position: absolute;
    top: 2.3rem;
    left: -1.9rem;
    padding: 0.6rem 2rem;
    transform: rotate(-48deg);
    filter: drop-shadow(0 0 0.5rem #000);
    z-index: 2;
    overflow: hidden;

    @media (max-width: 576px) {
      left: -0.9rem;
    }

    .shape1,
    .shape2 {
      position: absolute;
      top: 0;
      left: 0;
      background: crimson;
      width: 3rem;
      height: 100%;
    }

    .shape1 {
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

    .shape2 {
      left: unset;
      right: 0;
      clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    }

    span {
      font-size: 1.6rem;
      font-weight: bold;
      z-index: 1;
      background: crimson;
      color: #ffe739;
      text-shadow: 0 0 0.4rem rgba(255, 231, 57, 0.7);
      padding: 0.55rem 0.8rem;
    }


    &::before {
      content: "";
      position: absolute;
      z-index: 99;
      height: 36px;
      width: 13px;
      left: 7px;
      transform: skewX(1deg);
      top: 0;
      animation: slide 2s infinite;
    }
  }

  .item_back {
    height: 100%;
    overflow: hidden;
    border-radius: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      image-rendering: -webkit-optimize-contrast;
      border-radius: 2rem;
      transition: 0.4s linear;
    }
  }

  .item_info {
    position: absolute;
    width: 100%;
    height: 30%;
    padding: 2rem;
    border-radius: 2rem;
    background: #00000082;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name {
      h3 {
        font-size: 1.7rem;
        font-weight: bold;

        @media (min-width: 1400px) {
          font-size: 2rem;
        }

        @media (max-width: 767.98px) {
          font-size: 2rem;
        }
      }

      span {
        font-size: 1.5rem;
        color: #fbce09;

        @media (min-width: 1400px) {
          font-size: 1.6rem;
        }

        @media (max-width: 767.98px) {
          font-size: 1.6rem;
        }
      }
    }

    .buy_btn {
      a {
        position: relative;
        font-size: 2rem;
        padding: 0.5rem 1rem;
        border-radius: 2.5rem;
        border: none;
        background-color: #fb9209;
        color: #fff;
        transition: all 0.3s ease;
        cursor: pointer;

        @media (max-width: 991.98px) {
          font-size: 1.6rem;
        }

        @media (max-width: 767.98px) {
          font-size: 2rem;
        }
      }
    }
  }
}

.show_more_btn {
  text-align: center;
  margin-top: 5rem;
  cursor: pointer;

  a {
    font-size: 2rem;
    color: #fff !important;
    background-color: #fb9209;
    padding: 1rem 3rem;
    border-radius: 0.8rem;
    transition: 0.3s ease;

    &:hover {
      background-color: #faae27;
    }
  }

  @keyframes slide {

    0% {
      left: 7px;
      opacity: 0;
      background-color: rgba(255, 215, 0, 0.3);
    }

    1% {
      opacity: 1;
    }

    50% {
      background-color: rgba(255, 215, 0, 0.8);
    }

    100% {
      left: 100%;
      opacity: 0;
      background-color: rgba(255, 215, 0, 0.3);
    }
  }
}
</style>
