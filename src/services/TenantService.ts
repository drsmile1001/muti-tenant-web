import { computed } from "vue";
import router from "@/router";

export const tenantId = computed(() => router.currentRoute.value.params.tenant);
