import chalk from 'chalk'
import fs from 'fs';


function catchLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultado.length !== 0 ? resultado : chalk.red("Nâo há links no arquivo!");
    
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro!'));
}

async function catchFile(wayFile) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(wayFile, encoding);
        return catchLink(texto);
    } catch (erro){
        trataErro(erro);
    }
}

export default catchFile;


//       
//       \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)