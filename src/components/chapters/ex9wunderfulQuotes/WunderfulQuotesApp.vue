<template>
  <div class="row" style="margin-top: 40px">
    <app-header
      :quoteCount="quotes.length"
      :maxQuotes="maxQuotes"
    ></app-header>
    <hr>
    <app-new-quote @addQuote="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote">
    </app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on quote for deletion.</div>
      </div>
    </div>
  </div>
</template>

<script>
import NewQuote from "@/components/chapters/ex9wunderfulQuotes/NewQuote";
import QuoteGrid from "@/components/chapters/ex9wunderfulQuotes/QuoteGrid";
import Header from "@/components/chapters/ex9wunderfulQuotes/Header";

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
      if(this.quotes.length >= this.maxQuotes) {
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
