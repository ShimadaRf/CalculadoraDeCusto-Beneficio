function calcularPreco() {
    var idade = parseInt(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura * altura);

    //entreprise a
    var valorA_basico = 100 + (idade * 10 * (imc / 10));
    var valorA_standard = (150 + (idade * 15)) * (imc / 10);
    var valorA_premium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    // entreprise b
    var fatorComorbidade = getFatorComorbidade(imc);
    var valorB_basico = 100 + (fatorComorbidade * 10 * (imc / 10));
    var valorB_standard = (150 + (fatorComorbidade * 15)) * (imc / 10);
    var valorB_premium = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);

    // afficher les valeurs du plan
    var result = document.getElementById('resultado');
    result.innerHTML = `<p>VidaSana Tech - Básico: R$${valorA_basico.toFixed(2)}</p>
                        <p>VidaSana Tech - Standard: R$${valorA_standard.toFixed(2)}</p>
                        <p>VidaSana Tech - Premium: R$${valorA_premium.toFixed(2)}</p>
                        <hr>
                        <p>CuraPlus Innovations - Básico: R$${valorB_basico.toFixed(2)}</p>
                        <p>CuraPlus Innovations - Standard: R$${valorB_standard.toFixed(2)}</p>
                        <p>CuraPlus Innovations - Premium: R$${valorB_premium.toFixed(2)}</p>`;

    var result = document.getElementById('infor');
    result.innerHTML = `<p>Esperamos que esteja bem!</p>
                        <p>Mas se não estiver, temos a solução!<p/>
                        <p>Seu valor IMC: ${imc.toFixed(2)}.</p>
                        <p>Seu fator de comorbidade: ${fatorComorbidade}</p>
                        <hr>
                        <p>Ao lado temos os valores dos planos das empresas apoiadoras!</p>`;
}


// valeurs du tableau pdf
function getFatorComorbidade(imc) {
    if (imc < 18.5) {
        return 10;
    } else if (imc >= 18.5 && imc < 24.9) {
        return 1;
    } else if (imc >= 25 && imc < 29.9) {
        return 6;
    } else if (imc >= 30 && imc < 34.9) {
        return 10;
    } else if (imc >= 35 && imc < 39.9) {
        return 20;
    } else {
        return 30;
    }
}