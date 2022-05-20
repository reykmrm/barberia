import { createStore } from 'vuex'

export default createStore({
  state: {
    // variable que envio para saber la pocicion del array y mostar la informacion del valor seleccionado
    valor: 1,
    //arrary con la informacion de todos los cortes, peinados y stetica
    cortesHombres: [
      { nombre: 'Degradado Alto', precio: 300, src: require('../assets/hombre/degradadoAlto.jpeg'), 
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
        tipoPersona: 'hombre'
      },
      { nombre: 'Degradado a raz de piel', precio: 20000, src: require('../assets/hombre/degradado-a-raz-de-piel.jpeg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Degradado Bajo', precio: 20000, src: require('../assets/hombre/degradado-Bajo.jpeg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Degradado con afro', precio: 700, src: require('../assets/hombre/degradado-con-afro.jpeg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Degradado Estilizado', precio: 20000, src: require('../assets/hombre/Degradado-Estilizado.jpeg'),
        tipoPersona: 'hombre',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'CORTE MILITAR', precio: 20000, src: require('../assets/hombre/corte-militar.png'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado1.jpeg'),
        tipoPersona: 'peinados',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado2.jpeg'),
        tipoPersona: 'peinados',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado3.jpeg'),
        tipoPersona: 'peinados',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado4.jpeg'),
        tipoPersona: 'peinados',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado5.jpeg'),
        tipoPersona: 'peinados',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: '', precio: 20000, src: require('../assets/peinados/peinado7.jpeg'),
        tipoPersona: 'peinados',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Solmaria', precio: 20000, src: require('../assets/belleza/foto1.jpg'),
        tipoPersona: 'mujer',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Mariana', precio: 20000, src: require('../assets/belleza/foto1.jpg'),
        tipoPersona: 'mujer',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Camila', precio: 20000, src: require('../assets/belleza/foto2.jpg'),
        tipoPersona: 'mujer',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Juliana', precio: 20000, src: require('../assets/belleza/foto3.jpg'),
        tipoPersona: 'mujer',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'Samanta', precio: 20000, src: require('../assets/belleza/foto4.jpg'),
        tipoPersona: 'mujer',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
  ],

  //array donde almaceno las personas que pueden prestar el servicio
  personas:[
    {nombre:'Emmanuel'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png') }
  ],
  //variable que almacena la informcion amostrar de faca filtro en cada ventana hombre o mujer etc
  tipoPersonaS: [],
  },

  getters: {
    //metodo que me filta todos los cortes para mujeres
    filterMujerS(state){
      state.tipoPersonaS = state.cortesHombres.filter((elem) => elem.tipoPersona === 'mujer')
      return state.tipoPersonaS
    },
    //metodo que me filtra todos los cortes para hombre
    filterHombresS(state){
      state.tipoPersonaS = state.cortesHombres.filter((elem) => elem.tipoPersona === 'hombre')
      return state.tipoPersonaS
    },
    //metodo que me filtra todos los cortes para hombre
    filterPeinados(state){
      state.tipoPersonaS = state.cortesHombres.filter((elem) => elem.tipoPersona === 'peinados')
      return state.tipoPersonaS
    }  
  },
  mutations: {
    //metodo que me captura la posicion seleccionada al dar click
    tomarId(state, n){
      state.valor = n
    },
    buscarServicio(state,dato){
      state.tipoPersonaS = state.cortesHombres.filter((elem) => elem.nombre.includes(dato))
      return state.tipoPersonaS,
      console.log(state.tipoPersonaS)
    },
  },
  actions: {
  },
  modules: {

  }
})
