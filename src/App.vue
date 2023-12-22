<template>
  
  <AppUserList></AppUserList>
</template>

<script>
// import AppButton from './components/AppButton.vue'
//import AppLayout from './components/AppLayout.vue'
import AppUserList from './components/AppUserList.vue';
export default {
  name: 'App',
  components: {
    AppUserList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
