// Seleção dos elementos do DOM
const mainContainer = document.querySelector(".main");
const cardsucesso = document.querySelector(".containerCorfimacao"); // Seleciona apenas a div sem a classe 'active'
const mainformEmail = document.querySelector(
  ".main__container--form--input--email"
);
const mainformBtn = document.querySelector(
  ".main__container--form--input--btn"
);
const cardsucessoBtn = document.querySelector(".containerCorfimacao__btn");

// Adicionando eventos aos botões de email e da mensagem de confirmação
mainformBtn.addEventListener("click", submitEmail);
cardsucessoBtn.addEventListener("click", toggleCards);

// Função para alternar a exibição dos elementos
function toggleCards() {
  mainContainer.classList.toggle("hidden");
  cardsucesso.classList.toggle("active"); // Adiciona ou remove a classe 'active' da div .containerCorfimacao
}

// Função para validar o email
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Função para enviar o email
function submitEmail(e) {
  e.preventDefault();

  const emailPlaceholder = document.getElementById("email_placeholder");

  // Verifica se o email é válido
  if (validateEmail(mainformEmail.value)) {
    emailPlaceholder.textContent = mainformEmail.value;
    mainformBtn.innerText = mainformEmail.value;
    toggleCards();
    mainformEmail.value = "";
  } else {
    alert("Preencha um email válido.");
    mainformEmail.style.border = "1px solid red";
  }
}
