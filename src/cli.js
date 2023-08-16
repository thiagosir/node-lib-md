import catchFile from './index.js'
import fs from 'fs';
import chalk from 'chalk';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function printList(valida, resultado, identificador = '' ) {

    if (valida) {
        console.log(
            chalk.yellow('Lista validada'), 
            chalk.black.bgGreenBright(identificador),
            await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de Links -> '), 
            chalk.black.bgGreenBright(identificador),
            resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho)
    } catch (erro) {
        if (erro.code === 'ENOENT'){
            console.log(chalk.red("Arquivo ou diretório não existente ;( "));
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await catchFile(argumentos[2]);
        printList(valida, resultado);

    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (fileName) => {
            const lista = await catchFile(`${caminho}/${fileName}`);
            printList(valida, lista, fileName);
        })
    }
}

processaTexto(caminho);