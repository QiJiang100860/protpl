<template>
  <div class="home">home-{{env}}</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      env: ""
    };
  },
  created() {
    this.getEnv();
  },
  methods: {
    getEnv() {
      this.env = process.env.NODE_ENV;
    }
  }
};
</script>
