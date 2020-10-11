<template>
  <div class="container">
    <app-header
        :quoteCount="quotes.length"
        :maxQuotes="maxQuotes"></app-header>
    <hr>
    <app-new-quote @addQuote="newQuote"></app-new-quote>
    <app-quote-grid
        :quotes="quotes"
        @quoteDeleted="deleteQuote"
        style="margin: 20px">
    </app-quote-grid>
    <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
      <div class="alert alert-info" style="margin-top: 30px">Info: Click on quote for deletion.</div>
    </div>
  </div>
</template>

<script>
import NewQuote from "@/components/chapters/ex9wonderfulQuotes/NewQuote";
import QuoteGrid from "@/components/chapters/ex9wonderfulQuotes/QuoteGrid";
import Header from "@/components/chapters/ex9wonderfulQuotes/Header";

export default {
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header,
  },
  data: function () {
    return {
      quotes: [],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete quotes to create new ones :)')
      }
      this.quotes.push({
        header: quote.header,
        content: quote.content
      })
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  mounted() {
    this.quotes.push({
      header: "My Quote",
      content: "A wonderful Quote. :)"
    })
  }
}
</script>

<style>

</style>
