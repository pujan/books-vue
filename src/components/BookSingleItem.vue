<template>
    <div class="book-details">
        <div v-if="details.front" class="book-front">
            <img class="front" src="{{details.front}}" alt="front" />
        </div>
        <p>Title: {{details.title}}</p>
        <p>Pages: {{details.pages}}</p>
        <p>Rating: {{details.rating}}</p>
        <p>ISBN: {{details.isbn}}</p>
        <p>Publisher: <a :href="details.publisher.url">{{details.publisher.name}}</a></p>
        <div class="authors">
            <h4 class="h4c">Authors:</h4>
            <ul class="author-menu">
                <AuthorComponent v-for="author in details.authors"
                  :key="author.id"
                >
                    <li>
                        <a :href="author.uri">
                          {{author.firstname}} {{author.lastname}}
                        </a>
                    </li>
                </AuthorComponent>
            </ul>
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
ul.author-menu {
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
}
ul.author-menu li {
    padding: 6px 0;
}
.h4c {
    margin-top: 5px;
    margin-bottom: 0;
}
</style>
