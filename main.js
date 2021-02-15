const app = Vue.createApp({
  data() {
    return {
      cart: [],
      reviews: [],
      premium: true
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    addReview(review) {
      this.reviews.push(review);
    }
  }
})
