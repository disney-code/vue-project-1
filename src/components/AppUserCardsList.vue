<template>
  <div class="user-card">
    <img :src="user.picture.large" />
    <h3>{{ user.name.first }}</h3>
    <p>{{ user.email }}</p>
    <AppButton/>
  </div>
</template>
<script>
import AppButton from './AppButton.vue';
export default {
  components:{AppButton},
  name: "AppUserCardList",
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style>
.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
}
.user-card img {
  max-width: 100%;
  border-radius: 50%;
}
</style>