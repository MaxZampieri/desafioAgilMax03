

var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {

    var aluno = alunos[i];

    var tdnota1 = aluno.querySelector(".primeira_nota");
    var nota1 = tdnota1.textContent;

    var tdnota2 = aluno.querySelector(".segunda_nota");
    var nota2 = tdnota2.textContent;

    var tdtotal = aluno.querySelector(".nota_final");

    var nota1EhValido = validaNota1(nota1);
    var nota2EhValida = validaNota2(nota2);

    if (!nota1EhValido) {
        nota1EhValido = false;
        tdtotal.textContent = "Nota inválida";
        aluno.classList.add("aluno-invalido");
    }

    if (!nota2EhValida) {
        nota2EhValida = false;
        tdtotal.textContent = "Nota inválida";
        aluno.classList.add("aluno-invalido");
        
    }

    if (nota1EhValido && nota2EhValida) {
        var notaFinal = calculaNota(nota1, nota2);
        
        tdtotal.textContent = notaFinal;
        
        
    }
    
    
    
}

function calculaNota(nota1, nota2) {
    var notaFinal = 0;
    
    notaFinal = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    if (notaFinal < 6){
        aluno.classList.add("aluno-reprovado")
    }
    else {
        aluno.classList.add("aluno-aprovado")
    }
    
    return notaFinal;
    
    
}



function validaNota1(nota1) {

    if (nota1 >= 0 && nota1 <= 100) {
        return true;
    } else {
        return false;
    }
}

function validaNota2(nota2) {

    if (nota2 >= 0 && nota2 <= 100) {
        return true;
    } else {
        return false;
    }
}
