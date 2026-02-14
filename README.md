💱 Conversor de Moedas (JavaScript Puro)

Aplicação web desenvolvida com HTML, CSS e JavaScript (Vanilla JS) para conversão de valores em Real (BRL) para diferentes moedas internacionais.

O projeto foi construído com foco em fundamentos sólidos de JavaScript, organização lógica e manipulação eficiente do DOM.

📌 Descrição

O sistema permite:

Inserção de valor numérico em Real (BRL)

Seleção de moeda de destino

Conversão com base em taxa pré-definida

Atualização dinâmica da interface

Formatação condicional de casas decimais

Tratamento de singular/plural ("Real" / "Reais")

Moedas disponíveis:

Dólar Americano

Euro

Libra Esterlina

Bitcoin

Bitcoin recebe tratamento especial de precisão (até 8 casas decimais).

🧠 Conceitos Técnicos Aplicados
Fundamentos de JavaScript

Manipulação do DOM (querySelector, getElementById)

Eventos (onclick, onchange, oninput)

Conversão explícita de tipos com Number()

Estruturas condicionais (if, else if)

Operador ternário

Retorno de funções

Escopo de variáveis

Uso adequado de const e let

Tratamento Numérico

Controle de casas decimais com toFixed()

Formatação condicional baseada no tipo de moeda

Consciência sobre limitações de ponto flutuante no JavaScript

⚙️ Fluxo da Aplicação

Usuário informa o valor em BRL

Seleciona a moeda de destino

O sistema identifica a taxa correspondente

Realiza o cálculo da conversão

Aplica a formatação adequada

Atualiza os elementos da interface dinamicamente

🧮 Lógica Principal
function converter(){
    const valor = Number(document.querySelector("#input-valores").value)
    const moeda = document.getElementById("moedas").value

    let taxa

    if (moeda === "dolar"){
        taxa = 5.2
    } else if (moeda === "euro"){
        taxa = 5.6
    } else if (moeda === "libra"){
        taxa = 6.4
    } else if (moeda === "bitcoin"){
        taxa = 300000
    }

    const resultado = valor / taxa
    const casasDecimais = moeda === "bitcoin" ? 8 : 2

    document.querySelector("#resultado").innerText =
        resultado.toFixed(casasDecimais)
}

🏗 Decisões Técnicas

Separação de responsabilidades entre funções

Conversão explícita de string para número para evitar coerção implícita

Estrutura condicional clara para definição de taxa

Formatação diferenciada para moedas tradicionais e criptomoeda

Código organizado sem uso de bibliotecas externas

📂 Estrutura do Projeto
conversor-de-moedas/
│
├── index.html
├── styles.css
├── scripts.js
└── assets/

🔍 Limitações Atuais

Taxas de câmbio fixas (hardcoded)

Não há integração com API externa

Validação de entrada pode ser aprimorada

Não há tratamento avançado de erros

🚀 Próximos Passos

Integrar API de cotação em tempo real

Refatorar taxas para estrutura baseada em objeto

Implementar validação robusta de input

Melhorar formatação com toLocaleString

Tornar layout totalmente responsivo

🎯 Objetivo do Projeto

Este projeto foi desenvolvido para:

Consolidar fundamentos de JavaScript

Praticar organização de código

Melhorar entendimento sobre manipulação do DOM

Desenvolver raciocínio lógico aplicado a um problema real
