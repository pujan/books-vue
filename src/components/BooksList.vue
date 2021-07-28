<template>
    <h1>Books</h1>
    <BookComponent
      v-for="book in books"
      :key="book.isbn"
      :title="book.title"
      :isbn="book.isbn"
      :pages="book.pages"
      :rating="book.rating"
      :url="book.uri"
      :authors="book.authors"
      :id="book.id"
    />
</template>

<script>
import {ref} from 'vue';
import BookComponent from './BookComponent';

export default {
  name: 'BooksList',
  components: {BookComponent},
  async setup() {
    const books = ref(null);
    const resp = await fetch('http://127.0.0.1:8000/books/');
    const json = await resp.json();
    books.value = [...json];

    return { books };
  }
}
</script>

<style lang="css" scoped>
</style>
