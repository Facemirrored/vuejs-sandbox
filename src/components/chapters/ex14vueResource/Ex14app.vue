<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label>Username</label>
          <input v-model="user.username" class="form-control" type="text">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input v-model="user.email" class="form-control" type="text">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <input type="text" class="form-control" v-model="node">
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li
              class="list-group-item"
              :key="index"
              v-for="(u, index) in users">{{ u.username }} - {{ u.email }} --- {{ index }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ex14app",
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    }
  },
  methods: {
    submit() {
      // easy way with no additional resource editing
      // this.$http.post("data.json", this.user)
      //     .then(response => {
      //       console.log(response)
      //     }, error => {
      //       console.log(error)
      //     })
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      this.resource.getData({node: this.node})
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          }, error => {
            console.log(error)
          });
    }
  },
  created() {
    const customAction = {
      saveAlt: {method: "POST", url: "alternative.json"},
      getData: {method: "GET"}
    };
    this.resource = this.$resource("{node}.json", {}, customAction);
  }
}
</script>

<style scoped>

</style>