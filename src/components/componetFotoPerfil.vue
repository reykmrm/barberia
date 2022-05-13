<template>
  <!-- card de las fotos de las personas que prestan el servicio -->
  <div class="principal">
    <div class="flex flex-col items-center pb-10">
      <img
        class="mb-3 w-24 h-24 rounded-full shadow-lg"
        src="../assets/perfil/perfil1.jpeg"
        alt="Bonnie image"
      />
      <span class="text-sm text-gray-500 dark:text-gray-400">{{
        nombrePersona
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // variable del nombre de la persona que presta el srvicio
    nombrePersona: [],
  },
  data() {},
};
</script>

<style scoped>
.principal {
  margin-top: 20px;
  margin-left: 40px;
}
</style>
