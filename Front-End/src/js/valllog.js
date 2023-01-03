function Login() {
  var done = 0;
  var usuario = document.getElementById("username").value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementById("password").value;
  seha = senha.toLowerCase();

  if (usuario == "admin" && senha == "123") {
    window.location = "/src/html/searchpage.html";
    done = 1;
  }
  if (done == 0) {
    errorLoguin.textContent = `Dados Incorretos!`;
  }
}
