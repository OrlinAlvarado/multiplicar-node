const fs = require('fs');
const colors = require('colors');
//const fs = require('express'); //No son nativos de node
//const fs = require('./fs'); //Creados por nosotros

let crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido "${ base }" no es un numero`);
    }
    let data = '';

    let file = `tablas/tabla-${base} al ${limite}.txt`;
    for (let i = 1; i <= limite; i++) {
        data += `${ base } x ${ i } =  ${ base * i }\n`;
    }

    fs.writeFile(file, data, (err) => {
        if (err) throw err;
        //console.log('Archivo creado: ' + `${ file }`.green);
    });

    return file;
}

let listarTabla = (base, limite) => {
    console.log('========================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } x ${ i } =  ${ base * i }`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}