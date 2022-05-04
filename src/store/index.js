import { createStore } from 'vuex'

export default createStore({
  state: {
    valor: 1,
    cortesHombres: [
      { nombre: 'reyk', precio: 300, src: require('../assets/hombre/hombre1.jpg'), 
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre2.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre3.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 700, src: require('../assets/hombre/hombre4.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre5.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre6.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre7.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre8.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre9.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre10.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre1.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre12.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/hombre/hombre1.jpg'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
      { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
        descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
  ],
  cortesDamas: [
    { nombre: 'reyk', precio: 300, src: require('../assets/belleza/foto1.jpg'), 
    descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/belleza/foto2.jpg'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/belleza/foto3.jpg'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 700, src: require('../assets/belleza/foto4.jpg'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png'),
      descripcion: '“El peinado correcto puede convertir a una mujer común en hermosa y a una mujer hermosa en inolvidable”'},
],
  personas:[
    {nombre:'Emmanuel'},
    { nombre: 'reyk', precio: 20000, src: require('../assets/imagenq.png') }
  ]
  },
  getters: {
  },
  mutations: {
    tomarId(state, n){
      state.valor = n
    }
  },
  actions: {
  },
  modules: {
  }
})
