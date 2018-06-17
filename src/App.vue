<template>
  <div id="app">
    <nav>
      <router-link to="/">User</router-link>
      <router-link to="/UsersList">Users List</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 60%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px 20px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #4CAF50;
  font-weight: bold;
  margin-right: 15px;
  box-shadow: 0px 0px 10px lightgray;
}
nav a:hover{
  background: #4CAF50;
  color: #fff;
}
</style>
