const botao = document.getElementById('buttonResult');
const resultadoDiv = document.getElementById('resultado')



botao.addEventListener('click', function() {

    const campoKG = document.getElementById('campoDadosKg');
    const campoCM = document.getElementById('campoDadosCm');

    var valorKG = parseFloat(campoKG.value);
    var valorCM = parseFloat(campoCM.value);

    valorCM = valorCM / 100

   var imc = valorKG / (valorCM * valorCM)
   var classificacao = classificarIMC(imc)

   resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`

    function classificarIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 24.9) {
            return "Peso normal";
        } else if (imc < 29.9) {
            return "Sobrepeso";
        } else if (imc < 34.9) {
            return "Obesidade grau 1";
        } else if (imc < 39.9) {
            return "Obesidade grau 2";
        } else {
            return "Obesidade grau 3";
        }
    }
    }) 
