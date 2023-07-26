<template>
  <el-container style="height: 100%">
    <el-aside style="overflow: hidden; width: 40%; height: 100%">
      <el-card shadow="hover" class="card1">
        <div style="margin-left: 32px; height: 100px">
          <el-avatar :size="60" src="https://empty">
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>
        </div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="Nickname">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option
                v-for="item in form.cities"
                :key="item"
                :label="item"
                value="item"
              >
                {{ item }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Online activities" name="type" />
              <el-checkbox label="Promotion activities" name="type" />
              <el-checkbox label="Offline activities" name="type" />
              <el-checkbox label="Simple brand exposure" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
              <el-radio label="Sponsor" />
              <el-radio label="Venue" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-aside>
    <el-container>
      <el-header>
        <div class="summary">
          <el-card shadow="hover">
            <div style="background-color: #61c0ff; width: 100%">123</div>
          </el-card>
          <el-card shadow="hover"></el-card>
          <el-card shadow="hover"></el-card>
        </div>
      </el-header>
      <el-main style="overflow: hidden; padding-right: 0; padding-bottom: 0">
        <el-card style="height: 70%" shadow="hover"><piechart /></el-card>
        <el-card style="height: 30%" shadow="hover">
          <el-skeleton
            style="width: 100%"
            :loading="loading"
            animated
            :count="3"
          >
            <template #template>
              <el-skeleton-item
                v-for="i in tableData.length"
                :key="i"
                variant="h3"
              ></el-skeleton-item>
            </template>
            <template #default>
              <el-table :row-class-name="tableRowClassName" :data="tableData">
                <el-table-column
                  v-for="item in columns"
                  :key="item"
                  :label="item"
                  :prop="item"
                ></el-table-column>
              </el-table>
            </template>
          </el-skeleton>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import piechart from "@/components/echarts/pieEcharts/index.vue";

interface User {
  loginUser: string;
  userName: string;
  password: string;
  code: string;
}

// do not use same name with ref
const form = reactive({
  cities: ["无锡", "苏州", "南京", "徐州", "常州", "盐城", "镇江"],
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex % 2 === 0) {
    return "warning-row";
  } else {
    return "success-row";
  }
};

const loading = ref(true);

const columns = ["loginUser", "userName", "password", "code"];

const tableData: User[] = [
  {
    loginUser: "小张", //"登录用户"
    userName: "xiaozhang123", //账户名
    password: "xz123", //密码
    code: "pass", //code
  },
  {
    loginUser: "小明", //"登录用户"
    userName: "xiaoming123", //账户名
    password: "xm123", //密码
    code: "pass2", //code
  },
  {
    loginUser: "曹美丽", //"登录用户"
    userName: "caomeili123", //账户名
    password: "cml123", //密码
    code: "queen111", //code
  },
  {
    loginUser: "王大侠",
    userName: "wangdaxia123",
    password: "wdx123",
    code: "chrimp222",
  },
];

const onSubmit = () => {
  console.log("submit!");
};

const setLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  setLoading();
});
</script>

<style lang="scss" scoped>
.card1 {
  height: 100%;
}
.summary {
  height: 70px;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-column-gap: 10px;
}

.el-table :deep(.warning-row) {
  background-color: rgb(255, 234, 234);
}
.el-table :deep(.success-row) {
  background-color: rgb(235, 251, 255);
}
</style>
