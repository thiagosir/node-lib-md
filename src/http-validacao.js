import chalk from "chalk";

function extraiLinks(arrLinks) {
   return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}


async function checaStatus(listaURLs){
        const arrStatus = await Promise.all(
            listaURLs.map(async (url) => {
            try {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
            } catch (erro){
                return manageError(erro);
            }
        })
    )
    return arrStatus;
}

function manageError(erro){
    if (erro.cause.code === 'ENOTFOUND'){
        return "O link não existe!"
    } else {
        return 'ocorreu algum erro'
    }
}


export default async function listaValidada(listaDeLinks) {
    const links =  extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}

