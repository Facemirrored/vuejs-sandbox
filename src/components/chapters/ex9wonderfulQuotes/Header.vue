<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
      <h1 class="titel">Wonderful Quotes</h1>
      <hr>
      <h3>Quotes Added</h3>
      <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{ width: (quoteCount/maxQuotes) * 100 + '%' }">
          {{ quoteCount }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['quoteCount', 'maxQuotes']
}
</script>

<style scoped>
.titel {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif cursive;
  color: #6e6e6e;
}
</style>