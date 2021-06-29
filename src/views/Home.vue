<template>
    <div class="container">
        <div v-if="error" class="error">{{error}}</div>
        <Suspense v-else>
            <template #default>
               <HomeComponent />
            </template>
            <template #fallback>
                <AppLoader />
            </template>
        </Suspense>
    </div>
</template>

<script>
import {onErrorCaptured, ref} from 'vue';
import HomeComponent from '../components/HomeComponent';
import AppLoader from '../components/AppLoader';

export default {
    name: 'Home',
    components: {
        HomeComponent,
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
</style>
