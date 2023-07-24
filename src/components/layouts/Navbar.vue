<template>
  <nav class="navbar navbar-expand-lg" :class="{ change_color: scrollPosition >= 50 }">
    <div class="container">
      <router-link to="/" class="navbar-brand"><img src="../../assets/images/logo-2.png" class="logo"
        alt="" /></router-link>
      <button class="toggler" ref="toggler" @click="addClass" @scroll="changeNav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse" ref="collapsed">
        <ul class="nav_icons d-flex order-3">
          <li>
            <button @click="toggleSearch">
              <i class="fal fa-search"></i>
            </button>
          </li>
          <li>
            <router-link to="./"><i class="fal fa-user-circle"></i></router-link>
          </li>
          <li>
            <router-link to="./"><i class="fal fa-shopping-bag"></i></router-link>
          </li>
          <li class="lang_icon">
            <button @click.prevent="showLang" @blur.prevent="close">
              <i class="fal fa-globe-africa"></i>
              <transition name="langEffect">
                <ul class="lang" v-if="langShow" ref="langMenu">
                  <li class="active"><a href="#">English</a></li>
                  <li><a>العربية</a></li>
                </ul>
              </transition>
            </button>
          </li>
        </ul>
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="./" class="nav-link">Buy accounts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="./" class="nav-link">How to sell</router-link>
          </li>
          <li class="nav-item">
            <router-link to="./" class="nav-link">How to buy</router-link>
          </li>
          <li class="nav-item">
            <router-link to="./" class="nav-link">Help and support</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <transition name="searchModal">
    <SearchWrapper v-if="showSearch" @close="toggleSearch" />
  </transition>
</template>

<script>
import SearchWrapper from "../elements/SearchWrapper";
export default {
  name: "Navbar",
  components: {
    SearchWrapper,
  },
  data() {
    return {
      scrollPosition: null,
      langShow: null,
      showSearch: false,
    };
  },
  methods: {
    addClass() {
      this.$refs.toggler.classList.toggle("close");
      this.$refs.collapsed.classList.toggle("collapsed");
      if (this.$refs.collapsed.classList.contains("collapsed")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    showLang() {
      this.langShow = !this.langShow;
    },
    close() {
      this.langShow = null;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
.navbar-expand-lg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5rem 0;
  background-color: transparent;
  z-index: 3;
  transition: 0.4s;

  &.change_color {
    padding: 1rem;
    background: #1a1a2d;
    box-shadow: 0px 3px 10px 0px rgba($color: #000000, $alpha: 0.7);
  }

  .container {
    @media (max-width: 379.98px) {
      flex-wrap: unset;
    }
  }

  .toggler {
    border: none;
    box-shadow: unset;
    line-height: 0.5;
    padding: 0 1rem;
    background: transparent;
    display: none;
    z-index: 4;
    order: 3;

    @media (max-width: 991.98px) {
      display: block;
    }

    span {
      position: relative;
      display: block;
      width: 4rem;
      height: 0.2rem;
      background: #fff;
      margin: 0.5rem;
      border-radius: 1rem;
      transition: 0.3s;

      &:first-child {
        width: 2rem;
      }

      &:last-child {
        width: 2rem;
        margin-left: auto;
      }
    }

    &.close {
      span {
        &:first-child {
          width: 4rem;
          transform: rotate(45deg);
          top: 0.3rem;
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          width: 4rem;
          transform: rotate(-45deg);
          position: relative;
          top: -1rem;
        }
      }
    }
  }

  .navbar-collapse {
    transition: all 0.4s ease;

    @media (max-width: 991.98px) {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      margin-top: -50rem;
      display: block;
      visibility: hidden;
      opacity: 0;

      &.collapsed {
        margin-top: 0;
        text-align: center;
        padding: 8rem 0;
        background-color: #1a1a2d;
        visibility: visible;
        opacity: 1;
        z-index: 3;
      }
    }
  }

  .navbar-brand {
    margin: 0;

    .logo {
      width: 8rem;
    }
  }

  .navbar-nav {
    .nav-item {
      margin: 0 2rem;

      @media (max-width: 991.98px) {
        margin: 2rem auto;
      }
    }

    .nav-link {
      position: relative;
      font-size: 1.6rem;
      font-weight: 600;
      color: #fff;
      transition: 0.3s ease;

      @media (max-width: 991.98px) {
        font-size: 3rem;
      }

      &::after {
        content: "";
        width: 0.1rem;
      }

      &:hover {
        color: #fbce09;

        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 7rem;
          height: 0.2rem;
          background-color: #fbce09;
          transform: translateX(-50%);
          transition: 0.3s ease;
        }
      }
    }
  }

  .nav_icons {
    position: relative;
    top: 0.6rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 991.98px) {
      margin-bottom: 5rem;
    }

    li {
      position: relative;

      &:not(:first-child) {
        margin: 0 1rem;
      }

      @media (max-width: 379.98px) {
        margin: 0 0.5rem;
      }

      button {
        background: transparent;
        border: none;
        margin: 0;
      }

      i {
        font-size: 2.5rem;
        color: #fff;

        @media (max-width: 991.98px) {
          font-size: 3rem;
        }
      }

      &.lang_icon {
        margin: 0 0.3rem;

        button {
          background: transparent;
          border: none;
        }
      }

      .lang {
        position: absolute;
        bottom: -7.5rem;
        left: 50%;
        background-color: #fff;
        padding: 1rem;
        border-radius: 0.5rem;
        transform: translateX(-50%);

        &::before {
          content: "";
          position: absolute;
          top: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid #fff;
        }

        li {
          font-size: 1.4rem;
          margin: 0;
          border-radius: 2.5rem;
          transition: 0.3s ease;

          a {
            padding: 0.3rem 1rem;
          }

          &:last-child {
            margin-top: 0.5rem;
          }

          &.active {
            background-color: #faae27;

            a {
              color: #fff;
            }
          }

          &:hover {
            background-color: #fbce09;

            a {
              color: #fff;
            }
          }

          a {
            text-decoration: none;
            color: #000;
            font-weight: 600;
          }
        }
      }
    }

    .langEffect-enter-from,
    .langEffect-leave-to {
      opacity: 0;
    }

    .langEffect-enter-active,
    .langEffect-leave-active {
      transition: 0.3s ease;
    }
  }
}

.searchModal-enter-from,
.searchModal-leave-to {
  opacity: 0;
}

.searchModal-enter-active,
.searchModal-leave-active {
  transition: 0.3s ease;
}
</style>
