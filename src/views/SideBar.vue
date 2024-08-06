<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const selectedKeys = ref([]);
const openKeys = ref([]);
const route = useRoute();

const updateSelectedKeys = () => {
  const path = route.path;
  if (path.includes('products1')) {
    selectedKeys.value = ['1'];
    openKeys.value = ['sub1'];
  } else if (path.includes('products2')) {
    selectedKeys.value = ['2'];
    openKeys.value = ['sub1'];
  } else if (path.includes('User1')) {
    selectedKeys.value = ['3'];
    openKeys.value = ['sub2'];
  } else if (path.includes('User2')) {
    selectedKeys.value = ['4'];
    openKeys.value = ['sub2'];
  } else {
    openKeys.value = [];
  }
};

onMounted(updateSelectedKeys);

watch(route, updateSelectedKeys);
</script>

<template>
<a-layout-sider width="240">
    <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    >
        <a-sub-menu key="sub1">
        <template #title>
            <span>
            <img class="productIcon" src="../assets/icon/products.svg">
            Products
            </span>
        </template>
        <a-menu-item key="1"><img class="logo1" src="../assets/icon/logo1.svg"><RouterLink to="/products1">products1</RouterLink></a-menu-item>
        <a-menu-item key="2"><img class="logo2" src="../assets/icon/logo2.svg"><RouterLink to="/products2">products2</RouterLink></a-menu-item>
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