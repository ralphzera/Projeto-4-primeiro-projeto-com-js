


function trocadisplayEmbaixo() {
    const moedaescolhidaEmbaixo = document.querySelector("#moedas-embaixo").value;
    const bandeiraEmbaixo = document.querySelector("#bandeira-da-moeda-convertida")
    const textoembaixo = document.querySelector("#texto-embaixo")
    const resultadoEmbaixo = document.querySelector("#resultado-embaixo")

    if (moedaescolhidaEmbaixo == "libra") {
        bandeiraEmbaixo.src = "assets/libra-1.png"
        textoembaixo.textContent = "Libra"
        resultadoEmbaixo.innerHTML = "£ 0.00"

    }
    else if (moedaescolhidaEmbaixo == "euro") {
        bandeiraEmbaixo.src = "assets/euro-1.png"
        textoembaixo.textContent = "Euro"
        resultadoEmbaixo.innerHTML = "€  0.00"

    }
    else if (moedaescolhidaEmbaixo == "dolar") {
        bandeiraEmbaixo.src = "assets/dolar-1.png"
        textoembaixo.textContent = "Dólar Americano"
        resultadoEmbaixo.innerHTML = "US$ 0.00"

    }
    else if (moedaescolhidaEmbaixo == "bitcoin") {
        bandeiraEmbaixo.src = "assets/bitcoin-1.png"
        textoembaixo.textContent = "Bitcoin"
        resultadoEmbaixo.innerHTML = "BTC 0.00"

    }
    else if (moedaescolhidaEmbaixo == "real") {
        bandeiraEmbaixo.src = "assets/bandeira-circulo-brasil.png"
        textoembaixo.textContent = "Real"
        resultadoEmbaixo.innerHTML = "R$ 0.00"

    }


}

function trocadisplayEmcima(){
        
    const moedaescolhidaEmcima = document.querySelector("#moedas-emcima").value;
    const bandeiraEmcima = document.querySelector("#bandeira-da-moeda-a-ser-convertida")
    const textoemcima = document.querySelector("#texto-emcima")
    const resultadoEmcima = document.querySelector("#resultado-emcima")





    
    if (moedaescolhidaEmcima == "libra") {
        bandeiraEmcima.src = "assets/libra-1.png"
        textoemcima.textContent = "Libra"
        resultadoEmcima.innerHTML = "£ 0.00"

    }
    if (moedaescolhidaEmcima == "euro") {
        bandeiraEmcima.src = "assets/euro-1.png"
        textoemcima.textContent = "Euro"
        resultadoEmcima.innerHTML = "€  0.00"

    }
    if (moedaescolhidaEmcima == "dolar") {
        bandeiraEmcima.src = "assets/dolar-1.png"
        textoemcima.textContent = "Dólar Americano"
        resultadoEmcima.innerHTML = "US$ 0.00"

    }
    if (moedaescolhidaEmcima == "bitcoin") {
        bandeiraEmcima.src = "assets/bitcoin-1.png"
        textoemcima.textContent = "Bitcoin"
        resultadoEmcima.innerHTML = "BTC 0.00"

    }
    if (moedaescolhidaEmcima == "real") {
        bandeiraEmcima.src = "assets/bandeira-circulo-brasil.png"
        textoemcima.textContent = "Real"
        resultadoEmcima.innerHTML = "R$ 0.00"

    }

}



function atualizaDisplayReal() {
    const valorInput = document.querySelector("#input-valores").value
    const novoValor = document.querySelector("#resultado-emcima")
    const moedaOrigem = document.querySelector("#moedas-emcima").value


    if (moedaOrigem === "dolar") {
       novoValor.innerText = "US$ " + valorInput
    }
    if (moedaOrigem === "euro") {
        novoValor.innerText = "€ " + valorInput
    }
    if (moedaOrigem === "libra") {
        novoValor.innerText = "£ " + valorInput
    }
    if (moedaOrigem === "real") {
        novoValor.innerText = "R$ " + valorInput
    }
    if (moedaOrigem === "bitcoin") {
        novoValor.innerText = "BTC " + valorInput
    }

    

}

function converter() {
    const valor = Number(document.querySelector("#input-valores").value)
    const moedaOrigem = document.querySelector("#moedas-emcima").value
    const moedaDestino = document.querySelector("#moedas-embaixo").value

    let taxaOrigem
    let taxaDestino

    // TAXA ORIGEM
    if (moedaOrigem === "dolar") {
        taxaOrigem = 5.2
    }
    if (moedaOrigem === "euro") {
        taxaOrigem = 5.6
    }
    if (moedaOrigem === "libra") {
        taxaOrigem = 6.4
    }
    if (moedaOrigem === "bitcoin") {
        taxaOrigem = 300000
    }
    if (moedaOrigem === "real") {
        taxaOrigem = 1
    }



    // TAXA DESTINO
    if (moedaDestino === "dolar") {
        taxaDestino = 5.2
    }
    if (moedaDestino === "euro") {
        taxaDestino = 5.6
    }
    if (moedaDestino === "libra") {
        taxaDestino = 6.4
    }
    if (moedaDestino === "bitcoin") {
        taxaDestino = 300000
    }
    if (moedaDestino === "real") {
        taxaDestino = 1
    }

    const resultado = (valor*taxaOrigem) / taxaDestino

    

    let resultadoFormatado

    if (moedaDestino === "dolar") {
        resultadoFormatado = "US$ " + resultado.toFixed(2)
    }
    if (moedaDestino === "euro") {
        resultadoFormatado = "€ " + resultado.toFixed(2)
    }
    if (moedaDestino === "libra") {
        resultadoFormatado = "£ " + resultado.toFixed(2)
    }
    if (moedaDestino === "real") {
        resultadoFormatado = "R$ " + resultado.toFixed(2)
    }
    if (moedaDestino === "bitcoin") {
        resultadoFormatado = "BTC " + resultado.toFixed(8)
    }

    document.querySelector("#resultado-embaixo").innerText = resultadoFormatado
}


/*const taxa = 
    moeda === "dolar" ? 5.2 :
    moeda === "euro" ? 5.6 :
    moeda === "libra" ? 6.4 :
    300000
    outra forma de escrever if
     */
    
// if (moeda === "bitcoin") {
    //     resultadoFormatado = "BTC " + resultado.toFixed(8)
    // } else {
    //     resultadoFormatado = resultado.toFixed(2)
    // }
