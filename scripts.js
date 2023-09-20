//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault();//preventing form submitting
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Enviando sua mensagem...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest(); //creating new xml object
  xhr.open("POST", "message.php", true);//sending post request to message.php file
  xhr.onload = ()=>{//once ajax loaded
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Campos email e Senha são obrigatórios!") != -1 || response.indexOf("Insira um endereço de e-mail válido!") || response.indexOf("O campo e-mail e mensagem é obrigatório!")){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);//creating new formData obj. This obj is used to send form data
  xhr.send(formData);//sending form data
}