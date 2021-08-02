const simbolosValores = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}

const conferirLetrasValidas = (letras) =>{
    let chave = false
    for(letra of letras){
        chave = letra in simbolosValores
        if (!chave){
            break
        }
    } 
    return chave
}

const atribuirValoresLetras = letras => {
    const resultado = []
    for(letra of letras){
        resultado.push(simbolosValores[letra])
    }
    return resultado
}

const adcionarSinais = (valor)=>{
    const res = valor 
    let resultado = []
    for(index in res){
        const i = Number(index)

        if(res[i+1] != undefined){

            if(res[i] < res[i+1]){
                resultado.push(res[i]*-1)
            }else{
                resultado.push(res[i])
            }
        }else{
            resultado.push(res[i])
        }   
    }
    return resultado 
}

const somarValores = arrayPreparado=>{
    let res = 0
    for(n of arrayPreparado){
        res += n
    }
    return res
}
