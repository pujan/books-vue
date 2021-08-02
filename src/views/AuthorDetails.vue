<template>
    <div class="container">
        <h1 class="space-left">Author Details</h1>
        <AuthorDetailsComponent :id="id" />
    </div>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import AuthorDetailsComponent from '@/components/AuthorDetailsComponent';

export default {
    name: 'AuthorDetails',
    components: {
        AuthorDetailsComponent,
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup() {
        const error = ref(null);
        onErrorCaptured(e => {
          error.value = e;
        });

        return {
          error
        };
    }
}
</script>

<style lang="css" scoped>
</style>
