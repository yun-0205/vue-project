<script setup>
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
import eyeIcon from "../assets/icon/eye.svg";
import Primary_Button from '@/components/Primary_Button.vue';

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
    width: 240,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: 240,
  },
];

const data = [
  {
    key: 1,
    licenseid: 'KX-20231128s01',
    organization: 'Abstergo Ltd.',
    expiretime: '2023/03/15',
    action: 'test'
  },
  {
    key: 2,
    licenseid: 'KX-20231128s01',
    organization: 'Biffco Enterprises Ltd.',
    expiretime: '2023/12/18',
    action: 'test'
  },
  {
    key: 3,
    licenseid: 'KX-20231128s01',
    organization: 'Acme Co.',
    expiretime: '2023/02/20',
    action: 'test'
  },
  {
    key: 4,
    licenseid: 'KX-20231128s01',
    organization: 'Binford Ltd.',
    expiretime: '2023/07/03',
    action: 'test'
  },
  {
    key: 5,
    licenseid: 'KX-20231128s01',
    organization: 'Biffco Enterprises Ltd.',
    expiretime: '2023/11/25',
    action: 'test'
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
          <Primary_Button />
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