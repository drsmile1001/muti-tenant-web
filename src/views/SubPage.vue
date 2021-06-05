<template>
  <div class="home">
    <h1>租戶次頁</h1>
    我在租戶 {{ tenantId }}
    <div>
      <router-link :to="`/${tenantId}`">返回租戶首頁</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tenantId } from "@/services/TenantService";

export default defineComponent({
  name: "TenantHome",
  setup() {
    return {
      tenantId,
    };
  },
});
</script>
