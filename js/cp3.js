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

    const inputName = document.querySelector('#idName');
    const inputLastName = document.querySelector('#idLastName')
    const inputEmail = document.querySelector('#idEmail')
    const inputPass = document.querySelector('#idPassord')
    const confirmPass = document.querySelector('#idConfirmPassord')

    const labelName = document.querySelector("label[for='idName']")
    const labelLastName = document.querySelector("label[for='idLastName']")
    const labelEmail = document.querySelector("label[for='idEmail']")
    const labelPassword = document.querySelector("label[for='idPassword']")
    const labelConfirmPassword= document.querySelector("label[for='idConfirmPassword']")

    const submitButton = document.getElementById("btnSubmit")

    const greenColor = "color:#00CC00"
    const redColor = "color:#990000"

    let isNameValidated = false;
    let isEmailValid = 0

    function tryValidate(nameValidation, lastNameValidatioon, emailValidation, passwordValidation, confirmPasswordValidation){
        try{
            if(nameValidation === false){ 
                throw new Error("O Nome está invalido.")
            }
            if(lastNameValidatioon === false){
                throw new Error("O ultimo nome está Inválido.")
            }
            if(emailValidation === false){
                throw new Error("O Email está inválido.")
            } 
            if(passwordValidation === false){
                throw new Error("A senha está Inválida.")
            }
            if(confirmPasswordValidation === false){
                throw new Error("A confirmação de senha está inválida.")
            }
        }

        catch(err){
            alert(err.message)
        }
    }

    function nameValidation(){
        if(inputName.value.length >=5){
            labelName.setAttribute("style", String(greenColor));
            isNameValidated = true
        }
        else {
            labelName.setAttribute("style", String(redColor))
        }
    }
    inputName.addEventListener("keyup", () => nameValidation());

    function lastNameValidation(){
        if(inputLastName.value.length >=5){
            labelLastName.setAttribute("style", String(greenColor));
            isLastNameValidated = true
        }
        else {
            labelLastName.setAttribute("style", String(redColor))
        }
    }

    function emailValidation(){

        isEmailValid = inputEmail.includes("@")
    
        if (isEmailValid === true){
            labelEmail.setAttribute("style", String(greenColor))
        }
        else{
             labelName.setAttribute("style", String(redColor))
        }
    }
    
    inputEmail.addEventListener("keyup", () => emailValidation());


    
submitButton.addEventListener("click",() => tryValidate())






