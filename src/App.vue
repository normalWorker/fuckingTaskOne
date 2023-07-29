<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts">
import { constantRoutes } from "@/routers/index";
import Header from "@/layout/header/index.vue";

export default {
  data() {
    return {
      menuList: [],
      headTitle: "123",
      collapse: false,
    };
  },
  mounted() {
    this.menuList = constantRoutes;
  },
  components: {
    Header,
  },
  methods: {
    clickMenuItem(father, son) {
      this.headTitle = [father, son];
    },
    setCollapse() {
      this.collapse = !this.collapse;
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/style";
</style>
