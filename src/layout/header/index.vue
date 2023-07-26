<template>
  <div class="header">
    <div class="left">
      <el-icon
        style="margin-left: 8px; height: 50px; vertical-align: middle"
        :size="30"
        @click="setColla"
      >
        <Grid />
      </el-icon>
      <div style="margin-left: 8px; display: inline-block">
        <pageHeader :routes="headTitle" />
      </div>
    </div>
    <div class="right">right</div>
  </div>
</template>
<script lang="ts" setup>
import pageHeader from "./pageHeader";
const emit = defineEmits(["setColla"]);

let props = defineProps({
  headTitle: {
    type: Array,
    default: () => [],
  },
});

const setColla = () => {
  emit("setColla");
};

const getText = () => {};
</script>
<style lang="scss">
.header {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #ffffff;

  .left {
    width: 70%;
  }
  .right {
    width: 30%;
    float: right;
  }
}
</style>
