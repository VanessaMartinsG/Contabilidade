(() => {
const baseURL = "http://localhost:3000";
const form_login = document.forms.register__box__form;

form_login.addEventListener("submit",(e)=>{
    e.preventDefault();
    const{name,email,cpf,saldo} = form_login;
    const users = {
        "nome":name.value,
        "email":email.value,
        "cpf":cpf.value,
        "saldo":saldo.value
    };
    let validaCampos = validaCampo(name,email,cpf,saldo);
    if(validaCampos === false){
    createUser(users);
    }

})


function validaCampo(name,email,cpf,saldo){
    const nomeInpt = document.getElementById("name");
    const emailInpt = document.getElementById("email");
    const cpfInpt = document.getElementById("cpf");
    const saldoInpt = document.getElementById("saldo");
    let valida = true;

    if(name.value == "" || email.value == "" || cpf.value == "" || saldo.value == "" ){
        if(name.value == ""){
            nomeInpt.style.border = "1px solid red";
        }
        else{    
            nomeInpt.style.border = "1px solid #D7D7D7";
        }

        if(email.value == ""){
            emailInpt.style.border = "1px solid red"; 
        }
        else{
            emailInpt.style.border = "1px solid #D7D7D7";
        }

        if(cpf.value == ""){
            cpfInpt.style.border = "1px solid red"; 
        }
        else{ 
            cpfInpt.style.border = "1px solid #D7D7D7"; 
        }

        if(saldo.value == ""){
            saldoInpt.style.border = "1px solid red";  
        }
      else{
            saldoInpt.style.border = "1px solid #D7D7D7";
        }

    }else{
        valida = false;
    }
   
        return valida;
}


async function createUser(users){
    let response = await fetch(`${baseURL}/users`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(users),
    });
    userResponse = await response.json();

}

})();