<template>
  <div class="form-group text-center all">
    <form @submit.prevent="submit">
      <h6><strong> This page is restricted for Bookotel admin</strong></h6>
      <p>Please enter admin password</p>
      <div>
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
        />
      </div>
      <button
        class="btn btn-outline-secondary mt-4"
        type="button"
        v-on:click="login()"
      >
        Go to admin
      </button>
      <router-link to="/" class="nav-link">Return to main</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  setup() {
    return {
      input: {
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.password == "123") {
        this.$router.push({ path: "/admin/products" });
      } else {
        confirm("Incorrect password");
      }
    },
  },
};
</script>
