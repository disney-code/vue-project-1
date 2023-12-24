<template>
  <div>
    <div>Users</div>
    <br />
    <div v-if="loading">Loading ...</div>
    <ul>
      <li v-for="item in users" :key="item.email">
        <div>
          <img :src="item.picture.medium" alt="User Image" />
          <div>{{ item.name.first }}</div>
          <div>{{ secondrow(item) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AppUserList2",
  props: {
    secondrow: {
      type: Function,
      default: () => {},
    },
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
  },
  mounted() {
    this.loadData();
  },
};
</script>
