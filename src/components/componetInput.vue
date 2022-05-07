<template>
    <div class="">
        <form action="" class="form">
            <input type="text" class="input" placeholder="Buscar">
        </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.input{
    border-radius: 25px;
    text-align: center;
}

.input::placeholder{
    text-align: center;
}

</style>
