function ValidacaoUsuario(inputName, inputLastName, inputEmail, inputPass, confirmPass) {
    console.log(inputName);
    console.log(inputLastName);
    console.log(inputEmail);
    console.log(inputPass);
    console.log(confirmPass);

    if(inputName.value != "" && inputLastName.value != "" && inputEmail.value != "" && inputPass.value != "" && confirmPass != "") {
        return true;
    }else{
        return false;
    }
}

    const inputName = document.querySelector('#idNm');
    const inputLastName = document.querySelector('#idSegundoNm')
    const inputEmail = document.querySelector('#idEmail')
    const inputPass = document.querySelector('#idPass')
    const confirmPass = document.querySelector('#idConfirmarPass')

    const labelName = document.querySelector("label[for='idNm']")
    const labelLastName = document.querySelector("label[for='idSegundoNm']")
    const labelEmail = document.querySelector("label[for='idEmail']")
    const labelPass = document.querySelector("label[for='idPass']")
    const labelconfirmPass = document.querySelector("label[for='idConfirmPass]'")

    inputName.addEventListener("keyup",()=>{

    if(inputName.value.length >= 5){
        inputName.setAttribute("style", "color:#00CC00");
    }
    else{
        inputName.setAttribute("style", "color:#990000")
    }
  });

    labelLastName.addEventListener("keyup",()=>{

    if(labelLastName.value.length >= 5){
        labelLastName.setAttribute("style", "color:#00CC00");
    }
    else{
        labelLastName.setAttribute("style", "color:#990000")
    }
  });

    labelEmail.addEventListener("keyup",()=>{

    if(inputEmail.value.length >= 5){
        inputEmail.setAttribute("style", "color:#00CC00");
    }else if(labelEmail.value.length == 0){
        alert('Email está em branco')
    }
    else{
        inputEmail.setAttribute("style", "color:#990000")
    }
  });

    labelPass.addEventListener("keyup",()=>{

    if(labelPass.value.length >= 5){
        labelPass.setAttribute("style", "color:#00CC00");
    } else if(labelPass.value.length <= 8){
        alert('Senha inválida, exedeu a quantidade caracteres')
    }
    else{
        labelPass.setAttribute("style", "color:#990000")
    }
  });

      



