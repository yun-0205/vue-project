<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './SideBar.vue';

const columns = [
  {
    title: 'LicenseID',
    dataIndex: 'licenseid',
    width: 240,
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    width: 240,
  },
  {
    title: 'Expire Time',
    dataIndex: 'expiretime',
  },
  ];

const data = [
  {
    key: 1,
    licenseid: 'KX-20231128s01',
    organization: 'Abstergo Ltd.',
    expiretime: '2023/03/15',
  },
  {
    key: 2,
    licenseid: 'KX-20231128s01',
    organization: 'Biffco Enterprises Ltd.',
    expiretime: '2023/12/18',
  },
  {
    key: 3,
    licenseid: 'KX-20231128s01',
    organization: 'Acme Co.',
    expiretime: '2023/02/20',
  },
  ];
</script>

<template>
  <a-layout class="layout">
  <a-layout-header class="header">
    <div class="logo">
    <img src="../assets/icon/logo.svg">
    <h1>License</h1>
    </div>
  </a-layout-header>
  <a-layout>
    <SideBar />
    <a-layout style="padding: 0 24px 24px">
    <a-page-header class="title"
    title="Products1"
    />
    <a-layout-content
      :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
    >
    <a-table 
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 10 }"
    :scroll="{ y: 560 }"
    />
    </a-layout-content>
    </a-layout>
  </a-layout>
  </a-layout>
</template>

<style scoped>
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

.title {
  padding: 16px 0px;
}

/* .ant-table-wrapper >>> tr:hover {   
  background-color: red; 
} */

/* ::v-deep .test .ant-table-tbody > tr:hover > td {
  background-color: #F7F7F7;
} */
</style>