const botaoNome = document.getElementById("botao_nome");
const campoNome = document.getElementById("campo_nome");
escondeFormularioNome();

function abrirFormularioNome() {
  campoNome.removeAttribute("hidden");
  campoNome.addEventListener("keydown", (event) => {
    if (event.key == "Enter") inserirNome();
  });

  botaoNome.onclick = inserirNome;
}

function inserirNome() {
  let paragrafoNome = document.getElementById("texto_nome");
  if (campoNome.value.trim()) {
    paragrafoNome.innerText = campoNome.value;
    campoNome.value = "";
    botaoNome.innerText = "Mude seu nome.";
  } else {
    paragrafoNome.innerText = "Clique no botão abaixo para digitar seu nome.";
  }
  escondeFormularioNome();
}

function escondeFormularioNome() {
  campoNome.setAttribute("hidden", true);
  botaoNome.onclick = abrirFormularioNome;
}
