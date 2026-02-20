


function trocadisplay() {
    const moedaescolhida = document.getElementById("moedas").value;
    const bandeira = document.querySelector("#bandeira-que-muda")
    const textoemcima = document.querySelector("#texto-que-muda")
    const resultado = document.querySelector("#resultado")

    if (moedaescolhida == "libra") {
        bandeira.src = "assets/libra-1.png"
        textoemcima.textContent = "Libra"
        resultado.innerHTML = "£ 0.00"

    }
    if (moedaescolhida == "euro") {
        bandeira.src = "assets/euro-1.png"
        textoemcima.textContent = "Euro"
        resultado.innerHTML = "€  0.00"

    }
    if (moedaescolhida == "dolar") {
        bandeira.src = "assets/dolar-1.png"
        textoemcima.textContent = "Dólar Americano"
        resultado.innerHTML = "US$ 0.00"

    }
    if (moedaescolhida == "bitcoin") {
        bandeira.src = "assets/bitcoin-1.png"
        textoemcima.textContent = "Bitcoin"
        resultado.innerHTML = "BTC 0.00"

    }

    return moedaescolhida

}
function atualizaDisplayReal() {
    const valorInput = document.querySelector("#input-valores").value
    const novoValor = document.querySelector("#valor-real")
    const real = document.querySelector("#real")
    const numero = Number(valorInput)

    novoValor.innerText = "R$ " + valorInput
    if (numero === 1) {
        real.textContent = "Real"
    }
    else {
        real.textContent = "Reais"
    }

    return novoValor

}

function converter() {
    const valor = Number(document.querySelector("#input-valores").value)
    const moeda = document.getElementById("moedas").value


    let taxa

    if (moeda === "dolar") {
        taxa = 5.2
    }

    if (moeda === "euro") {
        taxa = 5.6
    }

    if (moeda === "libra") {
        taxa = 6.4
    }

    if (moeda === "bitcoin") {
        taxa = 300000
    }
    const resultado = valor / taxa

    let resultadoFormatado
    if (moeda === "dolar") {
        resultadoFormatado = "US$ " + resultado.toFixed(2)
    }

    if (moeda === "euro") {
        resultadoFormatado = "€ " + resultado.toFixed(2)
    }

    if (moeda === "libra") {
        resultadoFormatado = "£ " + resultado.toFixed(2)
    }

    if (moeda === "bitcoin") {
        resultadoFormatado = "BTC " + resultado.toFixed(8)
    }

    

    document.querySelector("#resultado").innerText = resultadoFormatado
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
