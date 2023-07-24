<template>
  <div class="welcome_section">
    <div class="row">
      <div class="col-12 col-lg-6 order-2 order-lg-1">
        <h2>
          <img src="../../../assets/images/icons/bullets.png" alt="icon" />
          <span>Welcome to our platform</span>
        </h2>
        <p>
          This site is an online store to buy games, accounts and sell them. We
          have more than 2000<sup>+</sup> game
        </p>
        <button>
          <span>Start now</span>
          <i class="far fa-chevron-right"></i>
        </button>
      </div>
      <div class="col-12 col-lg-6 order-1 order-lg-2">
        <div class="img_side">
          <img
            src="../../../assets/images/backgrounds/welcome.png"
            alt="section img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeSection",
};
</script>

<style lang="scss" scoped>
h2 {
  display: flex;
  align-items: center;
  color: #fff;
  span {
    font-size: 4rem;
    margin: 0 1rem;
  }
  @media (max-width: 991.98px) {
    justify-content: center;
  }
  @media (max-width: 767.98px) {
    span {
      font-size: 2.4rem;
    }
  }
}
p {
  color: #fff;
  font-size: 2.5rem;
  line-height: 2;
  margin: 1.2rem 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
  @media (max-width: 767.98px) {
    font-size: 1.8rem;
  }
}
button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 0.5rem 3.5rem;
  margin: 1.5rem 0;
  border-radius: 2.5rem;
  border: none;
  background-color: #fb9209;
  transition: all 0.3s ease;
  @media (max-width: 991.98px) {
    margin: 1.5rem auto;
  }
  &:hover {
    background: #fbce09;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: #fb9209;
  }
  &:hover {
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  i {
    transform: translateX(2rem);
  }
}
.img_side {
  height: auto;
  margin: auto;
  @media (min-width: 992px) {
    width: 85%;
  }
  @media (max-width: 991.98px) {
    width: 60%;
    margin-bottom: 1rem;
  }
  @media (max-width: 767.98px) {
    text-align: center;
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
