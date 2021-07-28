<template>
  <h1>Summary</h1>
  <div class="numbers">Number of authors: {{counters.authors}}</div>
  <div class="numbers">Number of books: {{counters.books}}</div>
  <div class="numbers">Number of publishers: {{counters.publishers}}</div>
</template>

<script>
import {ref} from 'vue';

export default {
    name: 'HomeComponent',
    async setup() {
      const counters = ref(null);
      const resp = await fetch('http://127.0.0.1:8000/counters/');
      const json = await resp.json();
      counters.value = json;

      return { counters };
    }
}
</script>

<style lang="css" scoped>
</style>
