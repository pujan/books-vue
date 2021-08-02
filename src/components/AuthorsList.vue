<template>
    <h1 class="space-left">Authors</h1>
    <div class="authors">
        <AuthorComponent v-for="author in authors" :key="author.id">
            <div class="author">
                <router-link :to="{name: 'author-details', params: {id: author.id}}">{{author.firstname}} {{author.lastname}}</router-link>
            </div>
        </AuthorComponent>
    </div>
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
.authors {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align-last: center;
    align-content: space-evenly;
    flex-direction: row;
}
.author {
    border: 1px solid #d6d6d6;
    margin-bottom: 10px;
    padding: 10px;
    width: 200px;
    margin-left: 10px;
}
</style>
