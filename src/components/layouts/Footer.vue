<template>
  <footer>
    <div class="container">
      <div class="subscribe">
        <h2>
          <i class="fal fa-envelope"></i>
          <span>Subscribe to get the latest offers</span>
        </h2>
        <form>
          <input type="text" placeholder="Email address" />
          <input type="button" value="Subscribe" />
        </form>
      </div>
      <div class="links mt-5 mt-xxl-0">
        <div class="row">
          <div class="col-lg-3 col-12">
            <ul class="info">
              <li class="logo">
                <img src="../../assets/images/logo-2.png" alt="Logo" />
              </li>
              <li class="disc">A platform specialized in selling games</li>
              <li class="social">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-facebook-f"></i>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-12">
            <h3>
              <img src="../../assets/images/icons/bullets.png" alt="Icon" />
              <span>Fast links</span>
            </h3>
            <ul class="fast_links">
              <li><i class="fal fa-chevron-right"></i><a>Home</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Digital Stores</a></li>
              <li>
                <i class="fal fa-chevron-right"></i><a>Games platforms</a>
              </li>
              <li>
                <i class="fal fa-chevron-right"></i><a>Marketing cards</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-12">
            <h3>
              <img src="../../assets/images/icons/bullets.png" alt="Icon" />
              <span>Accounts links</span>
            </h3>
            <ul class="accounts_links">
              <li><i class="fal fa-chevron-right"></i><a>My account</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Games gallery</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Games cards</a></li>
              <li>
                <i class="fal fa-chevron-right"></i><a>social platform</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-12">
            <h3>
              <img src="../../assets/images/icons/bullets.png" alt="Icon" />
              <span>Support links</span>
            </h3>
            <ul class="support_links">
              <li><i class="fal fa-chevron-right"></i><a>How to buy</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Check requests</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Games cards</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Send a message</a></li>
              <li><i class="fal fa-chevron-right"></i><a>Contact info</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer_end">
    <p>
      Copyright&#169; {{ date }} all reserved Made by
      <a href="https://www.facebook.com/Mohamed.Tarek0007/">Mohamed Tarek ❤️</a>
    </p>
    <ul class="social_links">
      <li v-for="img in images" :key="img.id">
        <a><img :src="img.img" :alt="img.id" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
      images: [
        { img: require("../../assets/images/icons/skrill.png"), id: 1 },
        { img: require("../../assets/images/icons/unkown.png"), id: 2 },
        { img: require("../../assets/images/icons/discover.png"), id: 3 },
        { img: require("../../assets/images/icons/mastercard.png"), id: 4 },
        { img: require("../../assets/images/icons/visa.png"), id: 5 },
        { img: require("../../assets/images/icons/apple.png"), id: 6 },
        { img: require("../../assets/images/icons/google.png"), id: 7 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: url(../../assets/images/backgrounds/footer.png) no-repeat;
  background-size: cover;
  color: #fff;
  padding: 12rem 0 5rem;
}

.subscribe {
  position: absolute;
  top: -5.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 66%;
  background: #ffb229;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 2rem 0;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.56);

  h2 {
    font-size: 3rem;
    color: #000;

    span {
      margin: 1rem;
    }

    @media (max-width: 1400px) {
      margin: auto;
    }
  }

  form {
    display: flex;

    input {
      background-color: #2a2a2a;
      color: #fff;
      border: none;
      outline: none;
      font-size: 2rem;
      padding: 1rem 2rem;
    }

    input[type="text"] {
      border-radius: 0.8rem 0 0 0.8rem;
    }

    input[type="button"] {
      border-radius: 0 0.8rem 0.8rem 0;
      border-left: 1px solid #fff;
    }

    @media (max-width: 1400px) {
      margin: auto;
    }
  }

  @media (max-width: 767.98px) {
    width: 80%;
    padding: 2rem 1rem;
  }

  @media (max-width: 575.98px) {
    width: 95%;
    padding: 2rem 1rem;
  }

  @media (max-width: 479.98px) {
    h2 {
      font-size: 2rem;
    }

    form {
      input {
        font-size: 1.2rem;
        padding: 1rem 1rem;
      }
    }
  }
}

.row {
  gap: 3rem 0;
}

.links {
  @media (max-width: 991.98px) {
    padding: 0 4rem;
  }
}

.info {
  .logo {
    img {
      width: 10rem;
    }
  }

  .disc {
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  .social {
    i {
      font-size: 3rem;

      &:nth-child(2) {
        margin: 0 2rem;
      }
    }
  }
}

h3 {
  font-size: 3rem;

  img {
    width: 2rem;
    position: relative;
    top: -0.3rem;
  }

  span {
    margin: 1rem;
  }
}

.fast_links,
.accounts_links,
.support_links {
  li {
    font-size: 1.8rem;
    margin-top: 1.5rem;
    cursor: pointer;

    i {
      color: #ec9700;
    }

    a {
      margin: 0 1rem;
      transition: 0.3s ease;

      &:hover {
        color: #ec9700;
      }
    }
  }
}

.footer_end {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem 0;
  background-color: #19192c;
  padding: 2.5rem;

  p {
    font-size: 2rem;
    margin-bottom: 0;
    color: #fff;
    margin: auto;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 0;
    margin: auto;

    @media (max-width: 575.98px) {
      gap: 2rem;
    }

    li {
      cursor: pointer;

      img {
        width: 80%;
      }
    }
  }
}
</style>
