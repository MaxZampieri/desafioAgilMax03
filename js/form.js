var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var aluno = obtemAlunoDoFormulario(form);

    var alunoTr = montaTr(aluno);

    var erros = validaAluno(aluno);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAlunoDoFormulario(form) {

    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        frequencia: form.frequencia.value,
        notaFinal: calculaNota(form.nota1.value, form.nota2.value)
    }

    return aluno;
}

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");

    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.nota1, "primeira_nota"));
    alunoTr.appendChild(montaTd(aluno.nota2, "segunda_nota"));
    alunoTr.appendChild(montaTd(aluno.frequencia, "frequencia"));
    alunoTr.appendChild(montaTd(aluno.notaFinal, "nota_final"));

    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAluno(aluno) {

    var erros = [];

    if (aluno.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (aluno.frequencia.length == 0) {
        erros.push("A frequencia não pode ser em branco");
    }

    if (aluno.nota1.length == 0) {
        erros.push("A primeira nota não pode ser em branco");
    }

    if (aluno.nota2.length == 0) {
        erros.push("A segunda nota não pode ser em branco");
    }

    if (!validaNota1(aluno.nota1)) {
        erros.push("Nota é inválido");
    }

    if (!validaNota2(aluno.nota2)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
