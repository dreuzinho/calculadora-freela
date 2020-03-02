calculoFreela();

function onlyNum(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
        campo.value = "";
    }
}

function calculoFreela() {

    let valorProjeto = document.getElementById("valorprojeto").value;
    let diasEfetivos = document.getElementById("diasefetivos").value;
    let horasDiarias = document.getElementById("horasdiarias").value;
    let diasFerias = document.getElementById("diaferias").value;

    let resultado = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) +
        ((diasFerias * diasEfetivos * horasDiarias));

    document.getElementById('result').value = resultado.toFixed(2);
}