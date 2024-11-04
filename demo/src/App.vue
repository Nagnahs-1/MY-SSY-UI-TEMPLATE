<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    class="container"
    style="
      width: 850px;
      padding-left: 50px;
      border-left-width: 50px;
      margin-left: 100px;
    "
  >
    <div class="logo-css1">
      <a href="https://vitejs.org/" target="_blank">
        <img src="./assets/vite.svg" class="logo" alt="Vite Logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/logo.svg" class="logo" alt="Vue Logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/ssy.svg" class="logo" alt="Vue Logo1" />
      </a>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Vite + Vue3 + SSYUI" />
      <div style="margin-bottom: 20px">
        <SButton>SButton</SButton>
        <SLink color="green" size="large">测试Link组件</SLink>
      </div>
      <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo-css1 {
  display: flex;
  justify-content: center;
  gap: 20px; /* 调整图像之间的间距 */
  margin-bottom: 20px; /* 调整图像与下方内容的间距 */
}

.logo {
  height: 60px; /* 调整图像的高度 */
  width: auto; /* 保持图像的宽高比 */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 1rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
