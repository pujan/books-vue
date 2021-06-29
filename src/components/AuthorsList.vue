<template>
    <h1>Authors</h1>
    <AuthorComponent v-for="author in authors" :key="author.id">
      <div class="author">
        <a :href="author.uri">{{author.firstname}} {{author.lastname}}</a>
      </div>
    </AuthorComponent>
</template>

<script>
import {ref} from 'vue';
import AuthorComponent from './AuthorComponent';

export default {
  name: 'AuthorsList',
  components: {AuthorComponent},
  async setup() {
    const authors = ref([]);
    const resp = await fetch('http://127.0.0.1:8000/authors/');
    const json = await resp.json();
    authors.value = [...json];

    return { authors };
  }
}
</script>

<style lang="css" scoped>
.author {
  margin-bottom: 5px;
  padding: 2px;
}
</style>
