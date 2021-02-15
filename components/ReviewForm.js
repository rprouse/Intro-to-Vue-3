app.component('review-form', {
  template:
  /*html*/`
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>leave a review</h3>

    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <p v-if="error !== ''" style="color: red;">{{ error }}</p>

    <input class="button" type="submit" value="Submit" />

  </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      error: ''
    };
  },
  methods: {
    onSubmit() {
      if(this.name === '' || this.review === '' || this.rating === null) {
        this.error = 'Please fill in every field!';
        return;
      }
      let review = {
        name: this.name,
        review: this.review,
        rating: this.rating
      };
      this.$emit('add-review', review);
      this.name = '';
      this.review = '';
      this.rating = null;
      this.error = '';
    }
  }
});