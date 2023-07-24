<template>
  <div class="how_to_use">
    <h2>
      <img src="../../../assets/images/icons/bullets.png" alt="bullets" />
      <span>How to use</span>
    </h2>
    <div class="steps">
      <div class="step" v-for="step in steps" :key="step.id">
        <img :src="step.img" alt="logo" />
        <span>{{ step.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          img: require("@/assets/images/icons/sale.png"),
          title: "Check Offers",
          id: 1,
        },
        {
          img: require("@/assets/images/icons/joystick.png"),
          title: "Pick a game",
          id: 2,
        },
        {
          img: require("@/assets/images/icons/click.png"),
          title: "Order",
          id: 3,
        },
        {
          img: require("@/assets/images/icons/credit-card.png"),
          title: "Safe pay",
          id: 4,
        },
        {
          img: require("@/assets/images/icons/order.png"),
          title: "Confirm",
          id: 5,
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
  margin-top: 10rem;
  span {
    font-size: 4rem;
    margin: 0 1rem;
    @media (max-width: 767.98px) {
      font-size: 2.4rem;
    }
  }
}
.steps {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 2rem 10rem;
  .step {
    text-align: center;
    width: 15rem;
    height: 15rem;
    border: 2px dashed #fb9209;
    padding: 2rem 2.5rem;
    border-radius: 50%;
    transition: 0.3s linear;
    user-select: none;
    &:hover {
      background-color: #fb9209;
    }
    img {
      width: 60%;
      height: 60%;
    }
    span {
      display: block;
      font-size: 1.6rem;
      color: #fff;
      margin-top: 1rem;
    }
  }
}
</style>
