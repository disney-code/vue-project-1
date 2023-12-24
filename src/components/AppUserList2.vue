<template>
  <div>
    <div>Users {{ count }}</div>
    <br />
    <div v-if="loading">Loading ...</div>
    <ul>
      <li v-for="item in users" :key="item.email">
        <div>
          <app-user-cards-list :user="item"></app-user-cards-list>
          
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import AppUserCardsList from "./AppUserCardsList.vue";
export default {
  components: { AppUserCardsList },
  name: "AppUserList2",
  props: {
    count: { type: Number },
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
