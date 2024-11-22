<template>
  <div class="main-layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "MainLayout",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100dvh;
  width: 100%;
}

.content {
  margin-left: 250px;
  width: calc(100% - 250px);
  flex-grow: 1;
  padding: 20px;
}
</style>
