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
    var result = document.getElementById('result');
    result.innerHTML = `<p>Operadora A - Básico: $${valorA_basico.toFixed(2)}</p>
                        <p>Operadora A - Standard: $${valorA_standard.toFixed(2)}</p>
                        <p>Operadora A - Premium: $${valorA_premium.toFixed(2)}</p>
                        <hr>
                        <p>Operadora B - Básico: $${valorB_basico.toFixed(2)}</p>
                        <p>Operadora B - Standard: $${valorB_standard.toFixed(2)}</p>
                        <p>Operadora B - Premium: $${valorB_premium.toFixed(2)}</p>`;
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