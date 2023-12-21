<template>
  <AppLayout>
    <template v-slot:header>
      Slots are awesome
    </template>
    
  <!-- <AppButton>
    ADD TO FAVOURITES
  </AppButton> -->
  <template v-slot:footer>
      made with slots
    </template>
  </AppLayout>
  
</template>

<script>
// import AppButton from './components/AppButton.vue'
import AppLayout from './components/AppLayout.vue'
export default {
  name: 'App',
  components: {
    // AppButton,
    AppLayout
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
