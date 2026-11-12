const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Capturar os valores digitados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();

    // Capturar os espaços das mensagens
    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroTel = document.getElementById("erroTel");
    const sucesso = document.getElementById("sucesso");

    // Limpar mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroTel.textContent = "";
    sucesso.textContent = "";

    // Remover bordas de erro anteriores
    document.getElementById("nome").classList.remove("campo-invalido");
    document.getElementById("email").classList.remove("campo-invalido");
    document.getElementById("tel").classList.remove("campo-invalido");

    let formularioValido = true;

    // Validar nome
    if (nome === "") {
        erroNome.textContent = "O nome é obrigatório.";
        document.getElementById("nome").classList.add("campo-invalido");
        formularioValido = false;
    }

    // Validar e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        erroEmail.textContent = "O e-mail é obrigatório.";
        document.getElementById("email").classList.add("campo-invalido");
        formularioValido = false;
    } else if (!formatoEmail.test(email)) {
        erroEmail.textContent = "Digite um e-mail válido.";
        document.getElementById("email").classList.add("campo-invalido");
        formularioValido = false;
    }

    // Validar telefone (ou idade, dependendo do seu HTML)
    if (tel === "") {
        erroTel.textContent = "Este campo é obrigatório.";
        document.getElementById("tel").classList.add("campo-invalido");
        formularioValido = false;
    } else if (!/^\d+$/.test(tel)) { // Verifica se contém apenas números
        erroTel.textContent = "Digite um valor válido contendo apenas números.";
        document.getElementById("tel").classList.add("campo-invalido");
        formularioValido = false;
    }

    // Resultado da validação
    if (formularioValido) {
        sucesso.textContent = "Cadastro validado com sucesso!";
    }
});