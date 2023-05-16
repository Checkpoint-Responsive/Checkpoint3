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