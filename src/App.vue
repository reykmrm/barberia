<template>
  <nav class="">
  <p class="inline italic text-white text-xl mr-10 ml-6 font-thin">HABE</p>
    <router-link to="/">INICIO</router-link> |
    <router-link to="/cortedamas">MUJERES</router-link> |
    <router-link to="/cortehombres">HOMBRES</router-link>
    <div class="containe font-extrabold">
    <componetInput class="mr-3" @input="boscarServicio"/>
     <button class="botonLogin relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium 
     text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 
     to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 
     hover:text-white dark:text-white focus:ring-4 
     focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
	v-on:click="tomarBusqueda(resultBusqueda)">
    <span class="relative px-5 p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <router-link to="/buscarservicios">
        buscar
      </router-link>
  </span>
</button>
     <button class="botonLogin relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium 
     text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 
     to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 
     hover:text-white dark:text-white focus:ring-4 
     focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
	>
    <span class="search relative px-5 p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <router-link to="/login">
        Login
      </router-link>
  </span>
</button>
    </div>
  </nav>
  <router-view/>
</template>
<script>
import { defineComponent } from 'vue'
import { mapMutations, } from 'vuex'
import componetInput from './components/componetInput.vue'
export default defineComponent({
  props: {
	rutaU:String,
  },
  data() {
    return {
      mostaraBusqueda: false,
      resultBusqueda: '',
    }
  },
  components: {
    componetInput,
  },
  methods: {
    ...mapMutations(['tomarBusqueda',]),
    boscarServicio(e){
      this.resultBusqueda = e.target.value;
      if (this.resultBusqueda === '') {
        this.mostaraBusqueda = false;
      }else{
        this.mostaraBusqueda = true;
      }
      return this.resultBusqueda
    },
  }
})
</script>


<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.input{
  margin-right:15px;
}
.containe{
  display: flex;
  float: right;
}
nav {
  font-family: inherit;
  padding-top: 20px;
  background: #343434;
  color: #bc9815;
  letter-spacing: 3px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 11;
}
nav a {
  font-weight: bold;
  padding: 20px;
}
nav a.router-link-exact-active {
  color: #ffb300;
}
.botonLogin{
  margin-right: 20px;
}
</style>