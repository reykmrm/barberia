<template>
<div>
  <div class="home">
  <p class="margin"></p>
    <div class="">
      <h1>
        <a>Destacados</a>
      </h1>
      <router-link to="/InformacionDetalleView">
      <div class="destacados">
        <hello-worldf  class="contenido"
          v-for="(cortes, indexSercicio) in cortesHombres" :key="indexSercicio"
          :precioServicio="cortes.precio"
          :nombreServicio="cortes.nombre"
          :src-imagen="cortes.src"
          :indexSercicio="indexSercicio"
          v-on:click="tomarId(indexSercicio)"
        />
      </div>
      </router-link>
    </div>
   
    <div class="">
      <h1>
        <a>Destacados</a>
      </h1>
      <router-link to="/InformacionDetalleView">
      <div class="destacados">
        <hello-worldf  class="contenido"
          v-for="(cortes, indexSercicio) in cortesHombres" :key="indexSercicio"
          :precioServicio="cortes.precio"
          :nombreServicio="cortes.nombre"
          :src-imagen="cortes.src"
          :indexSercicio="indexSercicio"
          v-on:click="tomarId(indexSercicio)"
        />
      </div>
      </router-link>
    </div>
  </div>
</div>  
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldf from '@/components/componentServicios.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState( ['cortesHombres'] ),
  },
  data() {
    return {
      precioServicio: 3000,
      valorCli: Number,
    }
  },
  name: 'HomeView',
  components: {
    //HelloWorld,
    HelloWorldf,
  },
  methods: {
    ...mapMutations(['tomarId']),
    imprimir(e){
      this.valorCli = e;
      alert(this.valorCli)
    }
  }
}
</script>

<style scoped>

.home {
  padding:20px;
}

.margin{
  margin-top: 90px;
}

.destacados{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.titulo{
  justify-self: start;
  padding-left: 5px;
  padding-bottom:30px;
  font-size:2rem;
}
</style>
