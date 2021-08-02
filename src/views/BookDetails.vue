<template>
    <div class="container">
        <h1 class="space-left">Book Details</h1>
        <BookDetailsComponent :id="id" />
    </div>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import BookDetailsComponent from '@/components/BookDetailsComponent';

export default {
    name: 'BookDetails',
    components: {
        BookDetailsComponent,
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {
        console.log('BookComponent ID: ', props.id);

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
