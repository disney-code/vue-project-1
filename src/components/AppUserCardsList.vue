<template>
  <ul>
    <li v-for="item in list" :key="item.email">
      <slot name="listitem" :user="item">
        <div class="card">
          <img :src="item.picture.large" />
          <div class="card-body">
            <slot name="first" :text="item.name.first"></slot>
            <slot name="last" :text="item.name.last"></slot>
            <slot name="full" :text="`${item.name.first} ${item.name.last}`"></slot>
            
          </div>
          
        </div>
      </slot>
    </li>
  </ul>
</template>
<script>
// import AppButton from "./AppButton.vue";
export default {
  
  name: "AppUserCardList",
  props: {
    list: {
      type: Array,
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