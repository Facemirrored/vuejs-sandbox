<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
        <form>
          <label>
            <input
                type="text"
                class="form-control header"
                v-model="quote.header"
                placeholder="A beautiful header">
          </label>
          <textarea
              class="form-control"
              rows="3"
              placeholder="A beautiful content"
              v-model="quote.content"></textarea>
          <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
        <div class="error" v-if="error">
          Your beautiful quote needs to be filled! :*
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewQuote",
  data: function () {
    return {
      quote: {
        header: "",
        content: ""
      },
      error: false
    }
  },
  methods: {
    createNew() {
      this.validate()
      if (this.error) {
        return;
      }

      this.$emit("addQuote", this.quote);
      this.quote.header = "";
      this.quote.content = "";
    },
    validate() {
      this.error = this.quote.header === "" || this.quote.content === "";
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}

.error {
  margin: 20px;
  text-align: center;
}
</style>