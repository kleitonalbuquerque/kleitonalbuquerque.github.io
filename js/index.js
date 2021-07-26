function reloadPage() {
  var inName    = document.getElementById("name");
  var inEmail   = document.getElementById("email");
  var inMessage = document.getElementById("message");

  var name    = inName.value;
  var email   = inEmail.value;
  var message = inMessage.value;

  if(name == "" || email == "" || message == "") {
    alert("Preencha todos os campos =)")
    inName.focus();
    return
  } else {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    console.log('E-mail enviado com sucesso');
  }
}

var send = document.getElementById("send")
send.addEventListener('click', reloadPage)
