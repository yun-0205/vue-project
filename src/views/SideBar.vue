<script setup>
import { ref } from 'vue';

const selectedKeys1 = ref(['1']);
const selectedKeys2 = ref(['2']);
const openKeys = ref([]);
</script>

<template>
<a-layout-sider width="240"
    
    >
    <a-menu
    v-model:selectedKeys="selectedKeys1"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    >
        <a-sub-menu key="sub1"
        >
        <template #title>
            <span>
            <img class="productIcon" src="../assets/icon/products.svg">
            Products
            </span>
        </template>
        <a-menu-item key="1"><img class="logo1" src="../assets/icon/logo1.svg"><RouterLink to="/products1">products1</RouterLink></a-menu-item>
        <a-menu-item key="2"><img class="logo2" src="../assets/icon/logo2.svg">Products2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
        <template #title>
            <span>
            <img class="accountIcon" src="../assets/icon/account.svg">
            User
            </span>
        </template>
        <a-menu-item key="3"><img class="accountIcon" src="../assets/icon/account.svg">User1</a-menu-item>
        <a-menu-item key="4"><img class="accountIcon" src="../assets/icon/account.svg">User2</a-menu-item>
        </a-sub-menu>
    </a-menu>
    </a-layout-sider>
</template>

<style scoped>
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