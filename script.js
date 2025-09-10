const digitarNome = document.getElementById("seu-nome__input");
const textoDoNome = document.getElementById("seu-nome__nome");
const botaoDoNome = document.getElementById("seu-nome__botao");
const tarefaInicial = document.getElementById("tarefa_inicial");
const todasTarefas = document.getElementById("tarefas");
const formulario = document.getElementById("formulario");
const nomeDigitado = document.getElementById("nome__input");
const linguagemDigitada = document.getElementById("linguagem__input");
const cursoDigitado = document.getElementById("curso__input");
const idadeDigitada = document.getElementById("idade__input");
var clicked = false;


function inserirNome() {
    if (!clicked) {
        digitarNome.removeAttribute('hidden');
        // botaoDoNome.removeAttribute('hidden');
    } else {
        textoDoNome.innerText = digitarNome.value;
        digitarNome.setAttribute('hidden', true);
        // botaoDoNome.setAttribute('hidden',true);
        digitarNome.value = '';
    }
    clicked = !clicked;

    // console.log("nomeVazio",textoDoNome.innerText == "");
    // console.log("nomeNaoDigitado",textoDoNome.innerText == 'Clique no botão abaixo para digitar seu nome.');
    if ((textoDoNome.innerText == "") || (textoDoNome.innerText == 'Clique no botão abaixo para digitar seu nome.')) {
        botaoDoNome.innerText = 'Insira seu nome.';
    } else {
        botaoDoNome.innerText = 'Mude seu nome.';
    }
}

digitarNome.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        inserirNome();
    }
})

idadeDigitada.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        confirmarFormulario();
    }
})

function apagarTarefaInicial(tarefas) {
    let quantidadeDeTarefas = tarefas.children.length;
    if (quantidadeDeTarefas > 0) {
        tarefaInicial.removeAttribute('hidden');
    } else {
        tarefaInicial.setAttribute('hidden', true);
    }
}

function inserirDados() {
    // linguagemDigitada.value = document.getElementById("linguagem").innerText.split(':')[1]
    // cursoDigitado.value = document.getElementById("curso").innerText.split(':')[1]
    // idadeDigitada.value = document.getElementById("idade").innerText.split(':')[1]
    formulario.removeAttribute('hidden');
}

function confirmarFormulario() {
    document.getElementById("linguagem").innerText = linguagemDigitada.value;
    document.getElementById("curso").innerText = cursoDigitado.value;
    if (idadeDigitada.value != '') {
        document.getElementById("idade").innerText = idadeDigitada.value + ' anos';
    } else {
        document.getElementById("idade").innerText = idadeDigitada.value;
    }
    formulario.setAttribute('hidden', true);
}

function cancelarFormulario() {
    formulario.setAttribute('hidden', true);
}

apagarTarefaInicial(todasTarefas);
