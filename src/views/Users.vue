<template>
  <div>
    <h1>Add Users</h1>

    <div class="formWrapper">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Job Title" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Mobile" />
      <input type="text" placeholder="Status" />
      <div v-if="dropdownRoles.length > 0">
        <select>
          <option value="">Select Role</option>
          <option
            v-for="role in dropdownRoles"
            :key="role.value"
            :value="role.value"
          >
            {{ role.label }}
          </option>
        </select>
      </div>
      <p v-else>You do not have permission to assign any roles.</p>
    </div>
    <div class="btnsMainWrapper">
      <button>Cancel</button>
      <div class="btnsWrapper">
        <button>Remove</button>
        <button @click="handleSubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AddUser",
  computed: {
    ...mapState(["currentUser", "roleOptions"]),
    dropdownRoles() {
      const fullRoles = [
        { value: "gea", label: "Global Engineering Admin" },
        { value: "sea", label: "Site Engineering Admin" },
        { value: "eng", label: "Engineering" },
        { value: "opr", label: "Operator" },
        { value: "obr", label: "Observer" },
      ];

      switch (this.currentUser.profile) {
        case "gea":
          return fullRoles;
        case "sea":
          return fullRoles.filter((role) => role.value !== "gea");
        case "eng":
          return fullRoles.filter((role) =>
            ["opr", "obr"].includes(role.value)
          );
        case "opr":
        case "obr":
          return [];
        default:
          return [];
      }
    },
  },
  methods: {
    handleSubmit() {
      alert("User role assigned successfully!");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.btnsMainWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.btnsWrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}

button {
  padding: 10px;
  display: block;
  background: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #f0f0f0;
}

.formWrapper {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

select,
input {
  outline: none;
  border-radius: 5px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  padding: 5px;
  background: transparent;
}
</style>
