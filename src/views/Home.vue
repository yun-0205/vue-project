<script setup>
import SideBar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <a-layout class="layout">
    <Header />
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