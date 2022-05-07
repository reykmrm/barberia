import { createStore } from 'vuex'

export default createStore({
  state: {
    // variable que envio para saber la pocicion del array y mostar la informacion del valor seleccionado
    valor: 1,
    //arrary con la informacion de todos los cortes, peinados y stetica
    cortesHombres: [
      { nombre: 'reyk', precio: 300, src: require('../assets/hombre/hombre1.jpg'), 
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
        tipoPersona: 'hombre'
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre2.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre3.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 700, src: require('../assets/hombre/hombre4.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre5.jpg'),
        tipoPersona: 'hombre',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre6.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre7.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre8.jpg'),
        tipoPersona: 'hombre',
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre9.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre10.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre1.jpg'),
        tipoPersona: 'hombre',
        //descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”',
      },
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre12.jpg'),
        tipoPersona: 'hombre',
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
    }
  },
  mutations: {
    //metodo que me captura la posicion seleccionada al dar click
    tomarId(state, n){
      state.valor = n
    },
  },
  actions: {
  },
  modules: {
  }
})
