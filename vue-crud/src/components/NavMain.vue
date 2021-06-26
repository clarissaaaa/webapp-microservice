<template>
  <div class="navbar navbar-expand-lg navbar-light outline-black">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/products" class="nav-link">Admin</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About us</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMain",
};
</script>

<style scoped>
.outline-black {
  border-top: solid black 1px;
  border-bottom: solid black 1px;
}
</style>
