const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        desc:'Muestra la tabla creada'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default:false,
        desc: 'Indica la base de la tabla'

    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default:10,
        desc: 'Indica hasta donde debe llegar la creacion'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b || argv.h)){
            throw 'la base o el Hasta tienen que ser un numero'
        }
        return true;
    })
    

    .argv;


    module.exports = argv;