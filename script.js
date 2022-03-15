function Converter() {
    let opcao = document.getElementById('moedas');
    let moeda = opcao.options[opcao.selectedIndex].text;
    console.log(moeda)
    let valor = document.getElementById('valor').value;
    console.log(valor)



    if (moeda === 'Dolar') {
        let dolarValor = 5.14
        let resultadoDolar = valor / dolarValor
        let convert = document.getElementById('valorConvertido')
        convert.innerHTML = `Seu valor em dolar e ${resultadoDolar.toFixed(2)} USD`
        console.log(resultadoDolar)
    } else if (moeda === 'Euro') {
        let euroValor = 5.65
        let resultadoEuro = valor / euroValor
        let convert = document.getElementById('valorConvertido')
        convert.innerHTML = `Seu valor em Euro e ${resultadoEuro.toFixed(2)} EUR`
    } else if (moeda === 'Remimbi') {
        let remimbiValor = 0.81
        let resultadoRemimbi = valor / remimbiValor
        let convert = document.getElementById('valorConvertido')
        convert.innerHTML = `Seu valor em Remimbi e ${resultadoRemimbi.toFixed(2)}`
    }
}
