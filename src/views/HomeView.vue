<template>
  <div>
    <div class="slider">
      <label for="carousel-3" class="carousel-control prev control-1">-</label>
      <label for="carousel-2" class="carousel-control next control-1">-</label>
      <label for="carousel-1" class="carousel-control prev control-2">-</label>
      <label for="carousel-3" class="carousel-control next control-2">-</label>
      <label for="carousel-2" class="carousel-control prev control-3">-</label>
      <label for="carousel-1" class="carousel-control next control-3">-</label>
      <SliderTaiwin />
    </div>
    <div class="home">
      <div class="overflow-x-scroll overflow-x-clip tamano1">
        <h1 class="titulo">Destacados</h1>
        <router-link to="/InformacionDetalleView">
          <div class="destacados">
            <hello-worldf
              class="contenido"
              v-for="(cortes, indexSercicio) in cortesHombres"
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

      <div class="overflow-x-scroll overflow-x-clip tamano1">
        <h1 class="titulo">Destacados</h1>
        <router-link to="/InformacionDetalleView">
          <div class="destacados">
            <hello-worldf
              class="contenido"
              v-for="(cortes, indexSercicio) in cortesHombres"
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
    </div>
    <img src="../assets/imagenn.png" alt="" srcset="" height="300px" />
  </div>
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldf from "@/components/componentServicios.vue";
import SliderTaiwin from "@/components/componentSlider.vue";
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cortesHombres"]),
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
    SliderTaiwin,
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
  padding: 10px;
}

.contenido {
  margin: 15px;
  flex-basis: 200px;
}

.destacados {
  display: inline-flex;
}
.titulo {
  margin-top: 40px;
  justify-self: start;
  padding-left: 5px;
  font-size: 2rem;
}
.tamano1 {
  width: 100%;
  height: 400px;
}

.tamano1::-webkit-scrollbar {
  background-color: rgb(144, 128, 60);
}

.tamano1::-webkit-scrollbar-thumb {
  background-color: rgb(255, 213, 0);
  border-radius: 10px;
}
.tamano1::-webkit-scrollbar-button {
  background-color: rgb(0, 0, 0);
}
.slider {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>
