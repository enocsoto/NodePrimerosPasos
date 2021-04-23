const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('colors')
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(color.white(nombreArchivo),color.cyan(`creado `)))
.catch(err=>console.log(err));