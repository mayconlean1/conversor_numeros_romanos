const verificarSeNumero = valor => Number(valor) ? true : false

const mostrarResposta = (resp)=>{
    const campoResp = document.querySelector('#resp')
    campoResp.innerHTML = resp
}

const teste = ()=>{
    const div = document.querySelector('#teste')
    div.innerHTML = 'oi'
    const teste = ['a' , 'b']
    console.log(teste[1+1]!== undefined )
}




