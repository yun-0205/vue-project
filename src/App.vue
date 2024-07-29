<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue';
import customTheme from "./customTheme.json";

const selectedKeys1 = ref(['2']);
const selectedKeys2 = ref(['1']);
const openKeys = ref(['sub1']);
</script>

<template>
  <a-config-provider
  :theme="customTheme">
  </a-config-provider>

  <a-layout>
    <a-layout-header class="header">
      <div class="logo">
        <img src="./assets/icon/logo.svg">
        <h1>License</h1>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <img class="productIcon" src="./assets/icon/products.svg">
                Products
              </span>
            </template>
            <a-menu-item key="1"><img class="logo1" src="./assets/icon/logo1.svg">Product1</a-menu-item>
            <a-menu-item key="2"><img class="logo2" src="./assets/icon/logo2.svg">Product2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <img class="accountIcon" src="./assets/icon/account.svg">
                User
              </span>
            </template>
            <a-menu-item key="3"><img class="accountIcon" src="./assets/icon/account.svg">User1</a-menu-item>
            <a-menu-item key="4"><img class="accountIcon" src="./assets/icon/account.svg">User2</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.header {
  background-color: #fff;
  box-shadow: 0px 1px 6px #00000015;
  z-index: 10;
  position: relative;
}

.logo {
  display: flex;
  justify-content: center;
  color: #235789;
}

.logo h1 {
  font-weight: 800;
  margin-left: 8px;
  font-size: 30px;
}

.logo1 {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  margin-bottom: 3px;
}

.logo2 {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  margin-bottom: 3px;
}

.productIcon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  margin-bottom: 3px;
}

.accountIcon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>