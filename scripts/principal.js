
const verificar = self =>{
    const valor = self.value

    if(verificarSeNumero(valor)){ // Converter Numeros
        fazerConversao(valor)

    }else if (valor.length ==0){ 
        mostrarResposta('')
    }else{ // Conversor de letras
        const upperLetras = valor.toUpperCase()
        const ul = upperLetras
        const chave = conferirLetrasValidas(ul)

        if(chave){
            const arrayNumeros = atribuirValoresLetras(ul)
            const numerosPreparados = adcionarSinais(arrayNumeros)
            const resultado = somarValores(numerosPreparados)
            const contraProva = fazerConversao(resultado)[0]
            
            mostrarResposta(upperLetras == contraProva? resultado: 'Formato inválido')
        }else{
            mostrarResposta('Formato inválido')
        }
    }
}




