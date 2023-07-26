<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in routes" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
const props = defineProps({
  routes: {
    type: Array,
    default: () => [],
  },
});
</script>
