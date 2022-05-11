<template>

  <nav class="">
    <router-link to="/">INICIO</router-link> |
    <router-link to="/cortedamas">MUJERES</router-link> |
    <router-link to="/cortehombres">HOMBRES</router-link>
    <div class="containe">
    <componetInput class="mr-3" @input="boscarServicio" v-on:input="buscarServicio(this.resultBusqueda)"/>
     <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    <span class="relative px-5 p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      <router-link to="/login">
        Login
      </router-link>
  </span>
</button>
    </div>
  </nav>
  <router-view/>
      <div class="" v-if="mostaraBusqueda">
      <h1>
        <a>Busqueda</a>
      </h1>
      <router-link to="/InformacionDetalleView">
      <div class="destacados">
        <hello-worldf  class="contenido"
          v-for="(cortes, indexSercicio) in buscarServicio" :key="indexSercicio"
          :precioServicio="cortes.precio"
          :nombreServicio="cortes.nombre"
          :src-imagen="cortes.src"
          :indexSercicio="indexSercicio"
          v-on:click="tomarId(indexSercicio)"
        />
      </div>
      </router-link>
    </div>
    <p>{{ thibuscarServicio }}</p>
</template>
<script>
import { defineComponent } from 'vue'
import { mapMutations, } from 'vuex'
import componetInput from './components/componetInput.vue'
import HelloWorldf from '@/components/componentServicios.vue'

export default defineComponent({
  data() {
    return {
      mostaraBusqueda: false,
      resultBusqueda: '',
    }
  },

  components: {
    componetInput,
    HelloWorldf,
  },
  methods: {
    ...mapMutations(['buscarServicio',]),
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
</style>
