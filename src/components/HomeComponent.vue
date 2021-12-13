<template>
    <h1 class="space-left">Summary</h1>
    <div class="summary">
        <div class="counters">
            <div class="numbers">Number of authors: <strong>{{counters.authors}}</strong></div>
            <div class="numbers">Number of books: <strong>{{counters.books}}</strong></div>
            <div class="numbers">Number of publishers: <strong>{{counters.publishers}}</strong></div>
        </div>
    </div>
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
.summary {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.counters {
    font-size: 20px;
    padding: 10px;
}
</style>
