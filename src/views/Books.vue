<template>
    <div class="container">
        <div v-if="error" class="error">{{error}}</div>
        <Suspense v-else>
            <template #default>
               <BooksList />
            </template>
            <template #fallback>
                <AppLoader />
            </template>
        </Suspense>
    </div>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import BooksList from '../components/BooksList';
import AppLoader from '../components/AppLoader';

export default {
  name: 'Books',
  components: {
    BooksList,
    AppLoader
  },
  setup() {
      const error = ref(null);
      onErrorCaptured(e => {
        error.value = e;
        return true;
      });

      return {
        error
      };
  }
}
</script>

<style lang="css" scoped>
.active {
    background-color: #63b6ff;
}
</style>
