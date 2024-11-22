<template>
  <div>
    <h1>Unauthorized</h1>
    <p>Your role is: {{ userRole }}. You don’t have permission to be here.</p>
    <router-link to="/">Return to Home</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Unauthorized",
  computed: {
    ...mapState(["currentUser", "roleOptions"]),
    userRole() {
      return this.roleOptions[this.currentUser.profile] || "Unknown Role";
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}

p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
a {
  text-decoration: none;
}
</style>
