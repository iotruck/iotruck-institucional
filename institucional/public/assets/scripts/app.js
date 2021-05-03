function alterar() {
    let form_cadastro = document.getElementById("Cadastro");
    let form_login = document.getElementById("Login");

  if(form_cadastro.style.display == 'block') {
        form_cadastro.style.display = "none";
        form_login.style.display = "block";
        btnlogin.className = "btn btnactive";
        btncadastro.className = "btn";
  } else {
        form_cadastro.style.display = "block";
        form_login.style.display = "none";
        btncadastro.className = "btn btnactive";
        btnlogin.className = "btn";
  }
}


function messageButton() {
    document.getElementById('box-show').style.display = 'block';
}

function closeMessage() {
    document.getElementById('box-show').style.display = 'none';
}

function planos() {
    window.location.href = "http://localhost:3000/index.html#planos";
}

function entrar() {
    window.location.href = "http://localhost:3000/login.html";
}

function motivation() {
    window.location.href = "http://localhost:3000/index.html#valores";
}

function reclame() {
    window.location.href = "https://www.reclameaqui.com.br/";
}