<template>
    <componet-foto-perfil class="compnerFoto"/>
</template>

<script>
import componetFotoPerfil from '@/components/componetInformacionDetalle.vue'
import { mapState } from 'vuex'

export default ({
     computed: {
        ...mapState(['personas', 'valor', 'cortesHombres']),
    },
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