import chalk from 'chalk'
import fs from 'fs';


function catchFile (wayFile){
    const encoding = 'utf-8';
    fs.readFile(wayFile, encoding, (_, texto) => {
        console.log(chalk.magenta.bold(texto));
    })
}
 catchFile('./arquivos/texto.md')