<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div class="col-sm-10 col-sm-offset-1 col-xs-12 col-md-8 col-md-offset-2">
            <label>
              <input
                  type="text"
                  class="form-control header"
                  v-model="quote.header"
                  placeholder="A beautiful header">
            </label>
          </div>
          <div class="col-sm-10 col-sm-offset-1 col-xs-12 col-md-8 col-md-offset-2">
          <textarea
              class="form-control"
              rows="3"
              placeholder="A beautiful content"
              v-model="quote.content"></textarea>
          </div>
          <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-8 col-md-offset-2">
            <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="error" v-if="error">
        Your beautiful quote needs to be filled! :*
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