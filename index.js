import chalk from 'chalk'
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro!'));
}


function catchFile (wayFile){
    const encoding = 'utf-8';
    fs.readFile(wayFile, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.magenta.bold(texto));
    })
}
 catchFile('./arquivos/texto.md')