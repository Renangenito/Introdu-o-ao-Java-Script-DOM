var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
     var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso Inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura Inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }



    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc
        
    }
}

function calculaImc(peso, altura){
    
    imc = peso / (altura*altura)
    return imc.toFixed(2);
}