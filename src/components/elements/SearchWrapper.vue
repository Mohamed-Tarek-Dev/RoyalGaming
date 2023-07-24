<template>
  <div class="search_wrapper" @click.self="closeModal">
    <div class="container">
      <form>
        <input type="search" name="Search" autofocus />
        <button><i class="fal fa-search"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchWrapper",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.search_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(31, 32, 64, 0.7);
  z-index: 99;
  form {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      font-size: 2rem;
      padding: 1rem 2rem;
      border-radius: 2.5rem 0 0 2.5rem;
      background: #fff;
      border: none;
      outline: none;
      box-shadow: 0 0 0.3rem 0 #fff;
    }
    button {
      padding: 1rem 2rem;
      background: #fbce09;
      box-shadow: 0 0 0.3rem 0 #fff;
      border-radius: 0 2.5rem 2.5rem 0;
      border: none;
      i {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
}
</style>
