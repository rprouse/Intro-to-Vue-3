const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  methods: {
    updateCart(item) {
      if(item.quantity > 0) {
        this.cart.push(item.id);
        item.quantity--;
      }
    }
  }
})
