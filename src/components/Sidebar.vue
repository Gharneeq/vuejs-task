<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="route in sidebarRoutes" :key="route.path">
          <router-link :to="route.path" exact-active-class="active-link">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { sidebarRoutes } from "../lib/constants";

export default {
  name: "Sidebar",
  data() {
    return {
      sidebarRoutes,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #273249;
  color: white;
  padding: 20px 10px;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  background: transparent;
  border-radius: 10px;
  padding: 10px;
  min-width: 100%;
  display: inline-block;
}

.sidebar li:hover a {
  background: #64a6ce;
}

.active-link {
  background: #64a6ce !important;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
