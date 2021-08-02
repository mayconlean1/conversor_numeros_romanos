const simbolos = [
    ['M' ,'V', 'X' ], 
    ['X' , 'L' ,'C'],
    ['C' , 'D' , 'M'],
]


const converter = (input, simbolo = ['I' , 'V' , 'X']) =>{
    const number = Number(input)
    let resposta = ''

    if(input >= 1 && input <= 9){
        if(number <= 3){
            for(let cont = 1; cont <= number; cont++){
                resposta += simbolo[0]
            }
            
        }else if (number == 4){
            resposta = simbolo[0] + simbolo[1]
        }
        
        if (number >= 5 && number <=8 ){
            resposta = simbolo[1]
            if (number > 5 && number <= 8){
                const diferenca = number - 5
        
                for(let cont = 1; cont <= diferenca; cont++){
                    resposta += simbolo[0]
                }
        }   
        }else if (number == 9){
            resposta = simbolo[0] + simbolo[2]
        }
    }
    
    return resposta 
}

const fazerConversao= valor => {
    const numeroFiltrado = String(Number(valor))
    const valorInput = numeroFiltrado
    const caracteresNumero = valorInput.length
    let res1= ''
    let res2 =''

    if (caracteresNumero <= 3){
        mostrarResposta ( montarSimbolo(valorInput))
        res1 = montarSimbolo(valorInput)
    }else if (caracteresNumero == 4){
        if(valorInput >= 4000){
            [numeroParte1 , numeroParte2] = separarNumeros(valorInput , 1) // junta 1 parte depois de 3 casas da diireita pra esquerda    
            mostrarResposta(`<span id='overline'>${montarSimbolo(numeroParte1)}</span>${montarSimbolo(numeroParte2)}`)
            res1=montarSimbolo(numeroParte1)
            res2=montarSimbolo(numeroParte2)
        }else{
            mostrarResposta ( montarSimbolo(valorInput , false))
            res1=montarSimbolo(valorInput)
        }    
    }else if (caracteresNumero == 5){
        [numeroParte1 ,numeroParte2] = separarNumeros(valorInput , 2)
        mostrarResposta( `
            <span id='overline'>${montarSimbolo(String(numeroParte1))}</span>${montarSimbolo(numeroParte2)}
        `)
        res1=montarSimbolo(numeroParte1)
        res2=montarSimbolo(numeroParte2) 
    }else if (caracteresNumero == 6){
        [numeroParte1 ,numeroParte2] = separarNumeros(valorInput , 3)
        mostrarResposta( `
            <span id='overline'>${montarSimbolo(String(numeroParte1))}</span>${montarSimbolo(numeroParte2)}
        `)
        res1=montarSimbolo(numeroParte1)
        res2=montarSimbolo(numeroParte2) 
    }else if (caracteresNumero == 7 && valorInput<4000000){
        [numeroParte1,numeroParte2,numeroParte3] = separarNumeros(valorInput , 3)
        mostrarResposta(`
            <span id='overline'>${numeroParte1}${montarSimbolo(numeroParte2)}</span>${montarSimbolo(numeroParte3)}
        `)
        res1=montarSimbolo(String(numeroParte1) + String(montarSimbolo(numeroParte2)))
        res2=montarSimbolo(numeroParte3)
    }else{
        mostrarResposta('A conversão só é possivel abaixo dos 4 milhões')
    }

    return [res1 , res2]
}

const montarSimbolo = (input, noOverline = true) =>{   
    let qc = input.length -1
    let result = ''

    let indexEnd = qc 
    for (let indexStart= 0 ; indexStart <= qc ; indexStart++){
        
        if(noOverline){
            const letra =  handleOverline(input , indexStart , indexEnd , noOverline)
            result += letra
        }else{    
            const letra =  handleOverline(input , indexStart , indexEnd , noOverline)
            result += letra
        }
        indexEnd--
    }
    return result
}

const separarNumeros = (input,partes)=>{
    let numeros = []
    let res1 = ''
    let res2 = ''
    let res3 = ''
    for(caracter of input){
        numeros.push(caracter)
    }
    if (input.length < 7){
        for(cont in numeros){
            if(cont < partes){
                res1 += numeros[cont] 
            }else{
            res2 += numeros[cont]
    
            }
        }
        return [res1 ,String(Number(res2)) ]

    }else if (numeros[0] < 4 ){
        for (let cont = 0; cont < numeros[0]; cont++){
            res1 += "M"
        }
        for (cont in numeros){
            if (cont != 0){
                if(cont < partes){
                    res2 += numeros[cont] 
                }else{
                    res3 += numeros[cont]
                }
            }   
        }
        return [res1 ,String(Number(res2)),String(Number(res3)) ]
    }
}

const handleOverline = (input,indexStart,indexEnd , noOverline)=>{
    let res = ''
    if(indexEnd == 0){         
            res += converter(input[indexStart] )
          
    }else if(indexEnd <= 2){
        res += converter(input[indexStart] , simbolos[indexEnd])   
    }else if (indexEnd == 3 && input < 4000){ 
        res += converter(input[indexStart] , simbolos[0])         
    }
    return res
}
