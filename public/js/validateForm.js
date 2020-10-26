const validateForm = ({ name, email, text, assunto }) => {
  if (name.value == '' || name.value == null || name.value <= 3) {
    alert('Por favor, insira um nome válido!');
    name.focus();
    return false;
  }
  if (
    email.value.indexOf('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value == '' ||
    email.value == null
  ) {
    alert('Por favor, insira um e-mail válido!');
    email.focus();
    return false;
  }

  if (assunto.value == '' || assunto.value == null) {
    alert('Assunto em branco. Por favor insira um assunto!');
    assunto.focus();
    return false;
  }

  if (text.value == '' || text.value == null || text.value <= 10) {
    alert('Insira uma mensagem válida!');
    text.focus();
    return false;
  }
};
