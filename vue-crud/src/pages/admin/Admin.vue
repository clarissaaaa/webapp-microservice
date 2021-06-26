<template>
  <Nav />

  <div class="container-fluid">
    <div class="row">
      <main class="justify-content-center">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav.vue";

export default {
  name: "Admin",
  components: { Nav },
};
</script>
