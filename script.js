const digitarNome = document.getElementById("seu-nome__input");
const textoDoNome = document.getElementById("seu-nome__nome");
const botaoDoNome = document.getElementById("seu-nome__botao");
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
    } else {
        textoDoNome.innerText = digitarNome.value;
        digitarNome.setAttribute('hidden', true);
        digitarNome.value = '';
    }
    clicked = !clicked;

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

function inserirDados() {
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
