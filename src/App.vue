<template>
  <select v-model="selected">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
  <p>Displaying {{ selected }} name</p>
  <AppUserList2>
    <template v-slot:userlist="{ list }">
      <AppUserCardsList :list="list">
        <template #[selected]="{ text }">
          <h4>{{ text }}</h4>
        </template>
      </AppUserCardsList>
    </template>
  </AppUserList2>
  <select></select>
</template>

<script>
// import AppButton from './components/AppButton.vue'
//import AppLayout from './components/AppLayout.vue'
import AppUserList2 from "./components/AppUserList2.vue";
import AppUserCardsList from "./components/AppUserCardsList.vue";
export default {
  name: "App",
  components: {
    AppUserCardsList,
    AppUserList2,
  },
  data() {
    return {
      selected: "first",
      options: [
        {value:'first',label:'first name'},
        {value:'last',label:'last name'},
        {value:'full',label:'full name'}
      ]
    };
  },
};
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
