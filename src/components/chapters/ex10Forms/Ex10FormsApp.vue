<template>
  <div class="container">
    <form v-if="!formData.submitted">
      <div class="row" style="padding-top: 10px">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <custom-name-form-app
            v-model="formData.fullName"></custom-name-form-app>
          <div class="form-group">
            <label for="mailInput">Email</label>
            <input
                id="mailInput"
                type="email"
                class="form-control"
                placeholder="Enter your mail"
                v-model.lazy="formData.mail">
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input
                id="passwordInput"
                type="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="formData.password">
          </div>
          <div class="custom-control custom-checkbox">
            <input
                id="storeCheckInput"
                type="checkbox"
                style="margin: 10px"
                class="custom-control-input"
                v-model="formData.storeCheck">
            <label
                for="storeCheckInput"
                class="custom-control-label">Store in Database?</label>
          </div>
          <button
              id="submittFormButton"
              type="submit"
              class="btn btn-primary"
              style="margin: 10px"
              @click.prevent="formData.submitted = true">Submit
          </button>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="formData.submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ formData.fullName }}</p>
            <p>Mail: {{ formData.mail }}</p>
            <p>Password: {{ formData.password }}</p>
            <p>Store in Database?: {{ formData.storeCheck }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomNameForm from "@/components/chapters/ex10Forms/CustomNameForm";

export default {
  components: {
    customNameFormApp: CustomNameForm
  },
  data: function () {
    return {
      formData: {
        fullName: '',
        mail: '',
        password: '',
        storeCheck: false,
        submitted: false
      }
    }
  }
}
</script>

<style>
.formLabel {
  margin-right: 10px;
}
</style>
