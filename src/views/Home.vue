<script setup>
import SideBar from './SideBar.vue';
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
        <div class="container">
          <div class="content">
            <h1>Welcome To License Management System</h1>
            <img src="../assets/icon/home_pic.svg">
          </div>
        </div>
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

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content h1 {
  color: #235789;
  font-size: 36px;
  font-weight: 700;
}

.content img {
  width: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>