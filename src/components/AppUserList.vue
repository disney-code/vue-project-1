<template>
  <section>
    <slot name="title">Users</slot>
    <ul class="userlist" v-if="state === 'loaded'">
      <li v-for="item in data.results" :key="item.email">
        <div>
          <img
            width="48"
            height="48"
            :src="item.picture.large"
            :alt="item.name.first + ' ' + item.name.last"
          />
          <div>{{ item.name.first }}</div>
        </div>
      </li>
    </ul>
    <slot v-if="state === 'loading'" name="loading"> loading ... </slot>
    <slot v-if="state === 'failed'" name="error">
      opps, something went wrong
    </slot>
  </section>
</template>
<script>
const states = {
  idle: "idle",
  loading: "loading",
  loaded: "loaded",
  failed: "failed",
};

export default {
  data() {
    return {
      state: "idle",
      data: undefined,
      error: undefined,
      states,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.state = "loading";
      this.error = undefined;
      this.data = undefined;
      try {
        setTimeout(async () => {
          const response = await fetch("https://randomuser.me/api/?results=5");
          const json = await response.json();
          this.state = "loaded";
          this.data = json;
          return response;
        }, 1000);
      } catch (error) {
        this.state = "failed";
        this.error = error;
        return error;
      }
    },
  },
};
</script>
