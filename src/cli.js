import catchFile from './index.js'
import chalk from 'chalk';

const caminho = process.argv;

catchFile(caminho[2]);

async function processaTexto(caminho) {
    const resultado = await catchFile(caminho[2]);
    console.log(chalk.yellow('Lista de Links -> '), resultado);
}

processaTexto(caminho);