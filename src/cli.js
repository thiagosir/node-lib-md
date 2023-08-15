import catchFile from './index.js'
import fs from 'fs';
import chalk from 'chalk';

const caminho = process.argv;

function printList(resultado, identificador = '' ) {
    console.log(
        chalk.yellow('Lista de Links -> '), 
        chalk.black.bgGreenBright(identificador),
        resultado);
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

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
        printList(resultado);

    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (fileName) => {
            const lista = await catchFile(`${caminho}/${fileName}`);
            printList(lista, fileName);
        })
    }
}

processaTexto(caminho);