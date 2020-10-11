<template>
  <div class="row" style="margin-top: 20px">
    <div class="col-sm-12">
      <app-quote :key="index" v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
        <div slot="quoteHeader">{{ quote.header }}</div>
        <div slot="quoteContent">{{ quote.content }}</div>
      </app-quote>
    </div>
  </div>
</template>

<script>

import Quote from '@/components/chapters/ex9wunderfulQuotes/Quote'

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