<template>
  <div class="container">
    <div>Name: vue3-webpack</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({});
</script>
