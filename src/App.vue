<template>
    <header>
        <h1 class="header"></h1>
        <nav>
            <div class="main-menu">
                <div class="menu-item" :class="{active: $route.name == 'Home'}">
                    <router-link to="/"><span>Home</span></router-link>
                </div>
                <div class="menu-item" :class="{active: $route.name == 'Books'}">
                    <router-link to="/books"><span>Books</span></router-link>
                </div>
                <div class="menu-item" :class="{active: $route.name == 'Authors'}">
                    <router-link to="/authors"><span>Authors</span></router-link>
                </div>
            </div>
        </nav>
    </header>
    <router-view/>
</template>

<style lang="css">
.main-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 330px;
}
.menu-item {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
}
.menu-item a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
}
.menu-item a:hover {
    background-color: #eaeafd;
    color: #63b6ff;
}
.menu-item a > span {
    display: inline-block;
    line-height: normal;
    margin-top: 38%;
}
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
</style>
