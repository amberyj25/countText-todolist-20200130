<template>
  <div class="wrap">
  <router-link to="/">首頁</router-link>
  <router-link :to="{name:'todolist'}">todolist</router-link>
  <router-link :to="{name:'countText'}">countText</router-link>
  <router-view></router-view>
  </div>
</template>
<style>
.wrap{
  width: 1000px;
  margin: auto,
} 
a{
  margin-left:58px;
}
</style>