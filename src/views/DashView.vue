
<template>
    <a-layout class="layout">
    <a-layout-header class="header">
        <div class="logo">
        <img src="../assets/icon/logo.svg">
        <h1>License</h1>
        </div>
    </a-layout-header>
    <a-layout>
        <a-layout-sider width="200">
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

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { reactive, ref } from 'vue';

    const selectedKeys1 = ref(['2']);
    const selectedKeys2 = ref(['1']);
    const openKeys = ref(['sub1']);

    const columns = [
    {
        title: 'LicenseID',
        dataIndex: 'licenseid',
        width: 240,
        // customCell: customCell,
    },
    {
        title: 'Organization',
        dataIndex: 'organization',
        width: 240,
        // customCell: customCell,
    },
    {
        title: 'Expire Time',
        dataIndex: 'expiretime',
        // customCell: customCell,
    },
    ];

    // const customCell = (column, index) => {
    //   if (index % 2 === 1) {
    //     return {
    //       class: 'custom-row',
    //     }
    //   }
    //   return {}
    // };

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

/* .custom-row {
  background-color: red;
} */

/* .ant-table-wrapper >>> tr:hover {   
  background-color: F7F7F7; 
} */

/* ::v-deep .test .ant-table-tbody > tr:hover > td {
  background-color: #F7F7F7;
} */
</style>