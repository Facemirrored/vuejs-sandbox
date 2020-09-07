<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-heading quote">
        <slot name="quoteHeader"></slot>
      </div>
      <div class="panel-body quote">
        <slot name="quoteContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.panel-heading {
  font-family: Arizonia, cursive;
  font-size: 24px;
  color: #6e6e6e;
}

.panel-body {
  font-family: "Times New Roman", cursive;
  font-size: 18px;
  color: #6e6e6e;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>