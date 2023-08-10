import chalk from 'chalk'
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro!'));
}

function catchFile (wayFile){
    const encoding = 'utf-8';
    fs.promises
    .readFile(wayFile, encoding)
    .then((texto) => console.log(chalk.magenta.bold(texto)))
    .catch(trataErro)
}
 catchFile('./arquivos/texto.md');