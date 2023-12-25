<template>
  <div>
    <div>Users {{ count }}</div>
    <br />
    <div v-if="loading">Loading ...</div>
    <slot name="userlist" :list="users"></slot>
    
  </div>
</template>
<script>
//import AppUserCardsList from "./AppUserCardsList.vue";
export default {
  
  name: "AppUserList2",
  props: {
    count: { type: Number },
  },
  data() {
    return {
      users: null,
      loading: null,
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      fetch("https://randomuser.me/api/?results=5")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.users = data.results;
          this.loading = false;
          console.log("hi first");
          console.log(this.users);
        })
        .catch((error) => console.error("Fetch error: ", error));
    },
    remove(item) {
      this.users.results = this.users.results.filter(
        (entry) => entry.email !== item.email
      );
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
