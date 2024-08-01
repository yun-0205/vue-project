<script setup>
  import customTheme from "./customTheme.json";
</script>

<template>
  <a-config-provider
  :theme="customTheme">
    <router-view></router-view>
  </a-config-provider>

  
</template>

