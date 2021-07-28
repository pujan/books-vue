<template>
    <div class="author-detail">
        <AuthorComponent>
            <span>
                <p>First name: {{details.firstname}}</p>
                <p>Last name: {{details.lastname}}</p>
                <p>Biography: {{details.biography}}</p>
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
</style>
