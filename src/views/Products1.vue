<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './SideBar.vue';
import Header from './Header.vue';

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
    <Header />
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
.title {
  padding: 16px 0px;
}

::v-deep(.ant-pagination-item:hover) {
  background-color: #D4ECF9;
}

::v-deep(.ant-table-thead .ant-table-cell) {
  background-color: #D4ECF9;
  border: none;
  box-shadow: none;
}
</style>