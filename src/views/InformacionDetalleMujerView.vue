<template>
    <p>hola gente</p>
    <componet-foto-perfil class="compnerFoto"/>
</template>

<script>
import componetFotoPerfil from '@/components/componetInformacionDetalleMujer.vue'


export default ({
    data() {
        return {
            
        }
    },
    components: {
        componetFotoPerfil,
    },
   
})
</script>

<style scoped>
.compnerFoto{
    margin-top:100px;
    margin-left: auto;
    margin-right:auto;

}
</style>