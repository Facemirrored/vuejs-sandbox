<template>
  <div>
    <div class="form-group">
      <label for="firstNameInput">First Name</label>
      <input
          id="firstNameInput"
          class="form-control"
          type="text"
          :value="firstName"
          @blur="changeName(true, $event)">
    </div>
    <div class="form-group">
      <label for="lastNameInput">Last Name</label>
      <input
          id="lastNameInput"
          class="form-control"
          type="text"
          :value="lastName"
          @blur="changeName(false, $event)">
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomNameForm",
  props: ['value'],
  methods: {
    changeName(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.$emit('input', name);
    }
  },
  computed: {
    firstName() {
      const name = this.value.split(" ")[0];
      if (name == null) {
        return "";
      } else {
        return name;
      }
    },
    lastName() {
      const name = this.value.split(" ")[1];
      if (name == null) {
        return "";
      } else {
        return name;
      }
    }
  }
}
</script>

<style scoped>
</style>