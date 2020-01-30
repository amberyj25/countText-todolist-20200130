<template>
  <div class="wrap">
  <router-link :to="{name:'first'}">首頁</router-link>
  <router-link :to="{name:'todolist'}">todolist</router-link>
  <router-link :to="{name:'countText'}">countText</router-link>
  <router-view></router-view>
  </div>
</template>
<style>
.wrap{
  width: 580px;
  margin: auto;  
} 

a{
  margin-right: 125px;
  color: blue;
}
</style>