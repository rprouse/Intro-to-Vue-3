const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 12, onSale: true },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false },
      ]
    }
  },
  methods: {
    addToCart() {
      if(this.variants[this.selectedVariant].quantity > 0)
      {
        this.cart++;
        this.variants[this.selectedVariant].quantity--;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      let title = this.brand + ' ' + this.product;
      if(this.variants[this.selectedVariant].onSale) {
        title += ' [On Sale!]';
      }
      return title;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    }
  }
})
