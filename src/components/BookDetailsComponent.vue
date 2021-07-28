<template>
    <div v-if="error" class="error">{{error}}</div>
    <Suspense v-else>
        <template #default>
            <BookSingleItem :id="id" />
        </template>
        <template #fallback>
            <AppLoader />
        </template>
    </Suspense>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import BookSingleItem from '@/components/BookSingleItem';
import AppLoader from '@/components/AppLoader';

export default {
    name: 'BookDetailsComponent',
    components: {
        BookSingleItem,
        AppLoader
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
        // return true;
      });

      return {
        error
      };
  }
}
</script>

<style lang="css" scoped>
</style>
