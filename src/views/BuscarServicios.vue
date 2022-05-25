<template>
  <div class="home">
    <router-link to="/informaciondetallemujerView">
      <div class="destacados">
        <h1 class="titulo">
          <a href="#">Resultado encontrados {{ buscarServicio.length }}</a>
        </h1>
        <hello-worldf
          class="contenido"
          v-for="(cortes, indexSercicio) in buscarServicio"
          :key="indexSercicio"
          :precioServicio="cortes.precio"
          :nombreServicio="cortes.nombre"
          :src-imagen="cortes.src"
          :indexSercicio="indexSercicio"
          v-on:click="tomarId(indexSercicio)"
        />
      </div>
    </router-link>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import HelloWorldf from "@/components/componentServicios.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  props: {
    busquedaBoton: []
  },
  computed: {
    ...mapState(["cortesHombres", "resultadoBusqueda"]),
    ...mapGetters(["buscarServicio"]),
  },
  data() {
    return {
      precioServicio: 3000,
      valorCli: Number,
    };
  },
  name: "HomeView",
  components: {
    //HelloWorld,
    HelloWorldf,
  },
  methods: {
    ...mapMutations(["boscarServicio"]),
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.destacados {
  margin-top: 55px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 40px repeat(2, 1fr);
}
.titulo {
  grid-column-start: 1;
  grid-column-end: 7;
  justify-self: start;
  padding-left: 5px;
  padding-bottom: 30px;
  font-size: 2rem;
}
</style>
