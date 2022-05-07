<template>
<div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-violet-200 w-9/12">
    <a href="#">
        <img class="rounded-t-lg w-9/12 tamanoImagen" :src="cortesHombres[valor].src "/>
    </a>
    <div class="p-5">
        <h5 class=" text-4xl font-bold tracking-tight text-gray-900 dark:text-purple-900 w-9/12 nombreServicio">{{ cortesHombres[valor].nombre }}</h5>
        <p class="text-2xl dark:text-purple-700"> {{ cortesHombres[valor].descripcion }}</p>
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-purple-600 w-9/12"> ${{ cortesHombres[valor].precio }}</h1>
    </div>
    <div class="contenedor">
    <componet-foto-perfil
    v-for="(item, index) in personas" :key="index.id"
    :nombrePersona="item.nombre"
    />
    </div>
</div>
</template>
<script>
import componetFotoPerfil from '@/components/componetFotoPerfil.vue'
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        
    },
    components: {
        componetFotoPerfil,
    },
    computed: {
        ...mapState (['cortesHombres', 'valor', 'personas']),
        ...mapGetters(['filterMujerS'])
    }
}
</script>

<style scoped>

.nombreServicio{
  margin-top: 20px;  
  margin-left:30px;
  margin-bottom:10px;
}
img {
  margin: auto;
  padding-top: 20px;
}
.contenedor {
    display: flex;
    justify-content: center;
}
</style>