<template>
    <div class="author-detail">
        <AuthorComponent>
            <span>
                <div v-if="details.photo" class="author-photo">
                    <img class="photo" src="{{details.photo}}" alt="photo" />
                </div>
                <p><span class="bold">First name:</span> {{details.firstname}}</p>
                <p><span class="bold">Last name:</span> {{details.lastname}}</p>
                <p><span class="bold">Biography:</span><br/>{{details.biography}}</p>
                <p><span class="info">Number books in database:</span> {{details.number_books}}</p>
            </span>
        </AuthorComponent>
    </div>
</template>

<script>
import {ref} from 'vue';
import AuthorComponent from './AuthorComponent';

export default {
    name: 'AuthorSingleItem',
    components: {
        AuthorComponent,
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    async setup(props) {
        const details = ref(null);
        const resp = await fetch(`http://127.0.0.1:8000/authors/${props.id}/`);
        const json = await resp.json();
        details.value = json;

        return { details };
    }
}
</script>

<style lang="css" scoped>
.bold {
    font-weight: 600;
}
.info {
    font-style: italic;
}
</style>
