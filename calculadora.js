function calcularIMC(){
    let peso = document.querySelector("#peso")
    peso/=100

    let altura = document.querySelector("#altura")

    let imc = peso / altura** 2;

    return imc
}

function exibirIMC(){
    let imc = calcularIMC()

    if (imc < 18.5) {
        text="Você está abaixo da faixa de IMC esperado"
      } else if (imc < 24.9) {
        text="Você está abaixo da faixa de IMC esperado"
      } else if (imc < 29.9) {
        text="Você está na faixa de IMC classificada  como sobrepeso"
      } else if (imc < 39.9) {
        text="Você está na faixa de IMC classificada  como obesidade"
      } else if (imc > 39.9) {
        text="Você está na faixa de IMC classificada  como obesidade mórbida"
      }
      document.getElementById("resultado_imc").innerText=text
}