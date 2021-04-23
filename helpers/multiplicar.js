const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar=false, hasta=10) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
                salida += (`${base} x ${i} = ${base * i} \n`);
        }
            if (listar) {
                console.log('====================='.red);
                console.log(color.green('Tabla del:'), color.magenta(base));
                console.log('====================='.red);
                console.log(color.random(salida));
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return color.gray(`Tabla-${base}.txt creada`);
        
        } catch (error) {
            throw error;
        }
    };

module.exports = {
    crearArchivo
};