<!-- @format -->

<template>
	<div>
		<div class="slider bg-cover">
			<SliderTaiwin />
		</div>
		<div class="home">
			<div class="overflow-x-scroll overflow-x-clip tamano1">
				<h1 class="titulo">Destacados</h1>
				<router-link to="/InformacionDetalleView">
					<div class="destacados">
						<hello-worldf
							class="contenido"
							v-for="(cortes, indexSercicio) in filterHombresS"
							:key="indexSercicio"
							:precioServicio="cortes.precio"
							nombreServicio="emmanuel"
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

			<div class="overflow-x-scroll overflow-x-clip tamano1">
				<h1 class="titulo">Destacados</h1>
				<router-link to="/InformacionDetalleView">
					<div class="destacados">
						<hello-worldf
							class="contenido"
							v-for="(cortes, indexSercicio) in filterPeinados"
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
							v-for="(cortes, indexSercicio) in filterMujerS"
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
		<div class="imagen">
			<img src="../assets/imagenn.png" alt="" srcset="" height="300px" />
			<div class="textoImagen">
				<h1 class="titulo">LA FELICIDAD ES AHORA</h1>
				<p class="texto text-justify">
					Algún día en cualquier parte, en cualquier lugar, te encontrarás a ti
					mismo y justo ese momento serà el mas feliz
				</p>
				<h1
					class="titulo text-right my-0 mx-36 text-9xl text-red-400 font-extralight"
				>
					Haz el cambio
				</h1>
			</div>
		</div>
	</div>
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldf from '@/components/componentServicios.vue';
import SliderTaiwin from '@/components/componentSlider.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
	props: {
		busquedaBoton: [],
	},
	computed: {
		...mapState(['cortesHombres']),
		...mapGetters(['filterMujerS', 'filterHombresS', 'filterPeinados']),
	},
	data() {
		return {
			precioServicio: 3000,
			valorCli: Number,
		};
	},
	name: 'HomeView',
	components: {
		//HelloWorld,
		HelloWorldf,
		SliderTaiwin,
	},
	methods: {
		...mapMutations(['tomarId']),
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

.imagen {
	width: 100;
	min-height: 700px;
	position: relative;
	display: flex;
}

.textoImagen {
	color: white;
	position: absolute;
}
.textoImagen .titulo {
	font-weight: bold;
	font-family: inherit;
	color: #ffb300;
	font-size: 6rem;
	margin: 100px 10px 10px 30px;
}

.textoImagen .texto {
	font-size: 3rem;
	font-weight: bold;
	font-style: oblique;
	margin: 70px 40px 0 100px;
}
</style>
