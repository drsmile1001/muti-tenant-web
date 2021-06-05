<template>
  <div class="home">
    <h1>租戶首頁</h1>
    我在租戶 {{ tenantId }}
    <div>
      <router-link :to="`/${tenantId}/sub-page`">前往次頁</router-link>
    </div>
    <div>
      <router-link to="/">返回首頁</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tenantId } from "@/services/TenantService";

export default defineComponent({
  name: "TenantSubPage",
  setup() {
    return {
      tenantId,
    };
  },
});
</script>
