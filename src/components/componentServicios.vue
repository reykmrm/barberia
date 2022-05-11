<template>
  <!-- card con precios y nombre del servicio -->
  <div class="tamano" >  
  <div class="rounded-2xl overflow-hidden shadow-lg rounded-3xl">
  <img class="tamanoIme"
  :src="srcImagen" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ nombreServicio }}</div>
    <p class="text-gray-700 text-base">
      ${{ precioServicio }}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  </div>
</div>
  </div>
</template>

<script>
export default {
  props: {
    //precio que aparece en el car
    precioServicio: [],
    //nombre del servicio del card
    nombreServicio: [],
    //imagen que aparece en el car
    srcImagen:[],
  },
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.shadow-lg:hover{
  border:1px solid rgb(255, 208, 0);
}
.tamanoIme{
  width:150px;
  height:150px;
  margin:auto;
  padding:10px;
  border-radius: 50%;
}
.tamano{
  margin-top: 30px;
  width:200px;
  height:250px;
}
</style>