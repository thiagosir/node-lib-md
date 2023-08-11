import chalk from 'chalk'
import fs from 'fs';


const textoTest = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)."

function catchLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captura = regex.exec(texto);
    console.log(chalk.blue(captura));
}

catchLink(textoTest);

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Erro!'));
}

async function catchFile(wayFile) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(wayFile, encoding);
        console.log(chalk.magenta.bold(texto));
    } catch (erro){
        trataErro(erro);
    }
}
 catchFile('./arquivos/texto.md');


//       
//       \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)