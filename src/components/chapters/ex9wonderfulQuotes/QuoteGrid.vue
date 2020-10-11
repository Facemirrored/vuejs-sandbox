<template>
  <div class="row">
    <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
      <app-quote :key="index" v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
        <div slot="quoteHeader">{{ quote.header }}</div>
        <div slot="quoteContent">{{ quote.content }}</div>
      </app-quote>
    </div>
  </div>
</template>

<script>

import Quote from '@/components/chapters/ex9wonderfulQuotes/Quote'

export default {
  name: "QuoteGrid",
  props: {
    quotes: {
      type: Array,
      require: true
    }
  },
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
}
</script>

<style scoped>

</style>