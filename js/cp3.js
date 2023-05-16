function ValidacaoUsuario(inputName, inputLastName, inputEmail, inputPass, confirmPass) {
    console.log(inputName);
    console.log(inputLastName);
    console.log(inputEmail);
    console.log(inputPass);
    console.log(confirmPass);
}

if(inputName.value != "" && inputLastName.value != "" && inputEmail.value != "" && inputPass.value != "" && confirmPass != "") {
    return true;
}else{
    return false;
}