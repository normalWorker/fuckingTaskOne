<template>
  <div class="vertical">
    <div class="leftbar">
      <el-container><div class="title">BINBIN</div></el-container>
      <el-scrollbar>
        <el-menu
          :collapse="collapse"
          default-active="home"
          unique-opened
          background-color="#304156"
          text-color="#bfcbd9"
          router
        >
          <el-sub-menu
            :index="route.path"
            v-for="route in menuList"
            :key="route.path"
          >
            <template #title>
              <el-icon>
                <component :is="route?.meta?.icon"></component>
              </el-icon>
              <span>{{ route.meta.title }}</span>
            </template>
            <el-menu-item
              @click="clickMenuItem(route, item)"
              v-for="item in route.children"
              :key="item.path"
              :index="item.name"
            >
              <el-icon>
                <component :is="item?.meta?.icon"></component>
              </el-icon>
              {{ item.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <div class="app-main">
      <Header @setColla="setCollapse" :headTitle="headTitle" />
      <div class="mainpage">
        <router-view></router-view>
      </div>
      <div class="mainfooter">
        copyright 2023 by normalWorker:caoange31@gmail.com
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { constantRoutes } from "@/routers/index";
import Header from "@/layout/header/index.vue";

export default {
  data() {
    return {
      menuList: [],
      headTitle: "",
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
