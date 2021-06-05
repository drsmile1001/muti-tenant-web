<template>
  <div class="home">
    <h1>首頁</h1>
    <div>
      <router-link to="/tenant-A/">租戶A</router-link>
    </div>
    <div>
      <router-link to="/tenant-B/">租戶B</router-link>
    </div>
    <div>
      <router-link to="/tenant-C/">租戶C</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
