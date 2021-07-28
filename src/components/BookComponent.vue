<template>
    <div class="books">
      <div class="book">
        <div class="title">
          <!--<a :href="url">{{title}}</a>-->
          <router-link :to="{name: 'book-details', params: {id: id}}">{{title}}</router-link>
        </div>
        <!-- in details: <div class="isbn">ISBN: {{isbn}}</div>
        <div class="pages">Pages: {{pages}}</div> -->
        <div class="rating">Rating: {{rating}} / 5</div>
        <!--<div class="authors">
          <h4 class="h4c">Authors:</h4>
          <AuthorComponent v-for="author in authors"
            :key="author.id"
          >
          <span>
            <a :href="author.uri">
              {{author.firstname}} {{author.lastname}}
            </a>
          </span>
          </AuthorComponent>
      </div>-->
      </div>
    </div>
</template>

<script>
// import AuthorComponent from "./AuthorComponent";

export default {
  name: 'BookComponent',
  // components: {AuthorComponent},
  props: {
    title: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    pages: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        dafault: 0.0
    },
    authors: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      default: '#'
    },
    id: {
        type: Number,
        required: true
    }

  }
}
</script>

<style lang="css" scoped>
.title {
  margin: 10px;
  font-weight: 700;
}
.book {
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 10px;
}
.h4c {
  margin-top: 5px;
  margin-bottom: 0;
}
</style>
