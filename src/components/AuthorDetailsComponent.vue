<template>
    <div v-if="error" class="error">{{error}}</div>
    <Suspense v-else>
        <template #default>
            <AuthorSingleItem :id="id" />
        </template>
        <template #fallback>
            <AppLoader />
        </template>
    </Suspense>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import AuthorSingleItem from '@/components/AuthorSingleItem';
import AppLoader from '@/components/AppLoader';

export default {
    name: 'AuthorDetailsComponent',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        AuthorSingleItem,
        AppLoader
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
