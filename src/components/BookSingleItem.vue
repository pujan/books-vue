<template>
    <div class="book-details">
        <p>Title: {{details.title}}</p>
        <p>Pages: {{details.pages}}</p>
        <p>Rating: {{details.rating}}</p>
        <p>ISBN: {{details.isbn}}</p>
        <p>Publisher: <a :href="details.publisher.url">{{details.publisher.name}}</a></p>
        <p>ID: {{id}}</p>
        <div class="authors">
          <h4 class="h4c">Authors:</h4>
          <AuthorComponent v-for="author in details.authors"
            :key="author.id"
          >
          <span>
            <a :href="author.uri">
              {{author.firstname}} {{author.lastname}}
            </a>
          </span>
          </AuthorComponent>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import AuthorComponent from './AuthorComponent';

export default {
    name: 'BookSingleComponent',
    components: {
        AuthorComponent
    },
    props: {
        id: String,
        // required: true
    },
    async setup(props) {
        const details = ref(null);
        const resp = await fetch(`http://127.0.0.1:8000/books/${props.id}/`);
        const json = await resp.json();
        details.value = json;

        return { details }
    }
}
</script>

<style lang="css" scoped>
</style>
