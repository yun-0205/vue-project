<script setup>
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
import Primary_Btn from '@/components/Primary_Btn.vue';

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
    title: 'Accounts',
    dataIndex: 'accounts',
    width: 240,
  },
];

const data = [
  {
    key: 1,
    licenseid: 'KX-20231128s01',
    organization: 'Abstergo Ltd.',
    accounts: 10,
  },
  {
    key: 2,
    licenseid: 'KX-20231128s01',
    organization: 'Biffco Enterprises Ltd.',
    accounts: 20,
  },
  {
    key: 3,
    licenseid: 'KX-20231128s01',
    organization: 'Acme Co.',
    accounts: 50,
  },
];
</script>

<template>
  <a-layout class="layout">
    <Header />
    <a-layout>
      <SideBar />
      <a-layout style="padding: 0 24px 24px">
        <div class="container">
          <a-page-header class="title" title="Products1" />
          <Primary_Btn />
        </div>
        <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 10 }"
        :scroll="{ x: false }"
        />
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

::v-deep(.ant-pagination-item a:hover) {
  color: #235789;
}

::v-deep(.ant-pagination-item) {
  background-color: #235789;
  border: none;
}

::v-deep(.ant-pagination-item a) {
  color: white;
}

::v-deep(.ant-table-thead .ant-table-cell) {
  background-color: #D4ECF9;
  border: none;
  box-shadow: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>