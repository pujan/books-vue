<template>
    <nav>
      <ul class="menu">
        <li :class="{active: $route.name == 'Home'}"><router-link to="/">Home</router-link></li>
        <li :class="{active: $route.name == 'Books'}"><router-link to="/books">Books</router-link></li>
        <li :class="{active: $route.name == 'Authors'}"><router-link to="/authors">Authors</router-link></li>
      </ul>
    </nav>
  <router-view/>
</template>

<style lang="css">
.active {
    background-color: #eaeafd;
}
a {
  text-decoration: none;
  color: #63b6ff;
}
a:hover {
  color: red;
}
.menu {
  list-style: none;
  display: block;
  margin-top: 10px;
  margin-bottom: 30px;
}
.menu li {
  display: inline-block;
  padding: 20px;
  border: 1px solid #000;
  margin-left: 5px;
  cursor: pointer;
}
.menu li:first {
  margin-left: 0;
}
</style>
