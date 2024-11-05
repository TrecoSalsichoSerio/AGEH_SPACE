paginaAtual = 0

function visualizar(pagina){

    if(pagina == 'Voltar'){
        paginaAtual = paginaAtual - 1
    }
    else if(pagina == 'Avançar'){
        paginaAtual = paginaAtual + 1
    }

    if(paginaAtual < 0){
        paginaAtual = 0
    }
    else if(paginaAtual > pagMaximo){
        paginaAtual = pagMaximo
    }

    document.body.setAttribute('page', `pag${paginaAtual}`)
}