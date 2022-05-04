<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/cortedamas">Mujeres</router-link> |
    <router-link to="/cortehombres">Hombres</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: #a4c7eb;
  color: black;
  letter-spacing: 3px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 11;
}

nav a {
  font-weight: bold;
  padding: 35px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
