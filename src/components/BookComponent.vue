<template>
  <div class="book">
    <div class="title">
      <router-link :to="uri">{{title}}</router-link>
    </div>
    <div v-if="front" class="book-front">
        <img class="front" src="{{front}}" alt="front" />
    </div>
    <div class="rating">Rating: {{rating}} / 5</div>
  </div>
</template>

<script>
// import AuthorComponent from "./AuthorComponent";

export default {
  name: 'BookComponent',
  // components: {AuthorComponent},
  props: {
    title: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    pages: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        dafault: 0.0
    },
    authors: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      default: '#'
    },
    id: {
        type: Number,
        required: true
    },
    front: {
        type: String,
        default: ''
    },
    uri: {
        type: String,
        required: true
    }
  }
}
</script>

<style lang="css" scoped>
.title {
    margin: 10px;
    font-weight: 700;
    text-align: center;
}
.book {
    border: 1px solid #d6d6d6;
    margin-bottom: 10px;
    padding: 10px;
    width: 200px;
    margin-left: 10px;
}
</style>
