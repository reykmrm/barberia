<template>
  <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/cortedamas">Mujeres</router-link> |
    <router-link to="/cortehombres">Hombres</router-link>
    <componetInput class="input" @input="boscarServicio" v-on:input="buscarServicio(this.resultBusqueda)"/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.input{
  display: inline-block;
  float: right;
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
