<template>
  <div class="home">
    <router-link to="/informaciondetallleHombreView">
      <div class="destacados">
        <h1 class="titulo">
          <a href="#">Destacados</a>
        </h1>
        <hello-worldf
          class="contenido"
          v-for="(cortes, indexSercicio) in filterHombresS"
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
//import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldf from "@/components/componentServicios.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["cortesHombres"]),
    ...mapGetters(["filterHombresS"]),
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
    ...mapMutations(["tomarId"]),
    imprimir(e) {
      this.valorCli = e;
      alert(this.valorCli);
    },
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
