import {postAccount} from "../js/apiHandler"
(() => {
   
    const form_login = document.forms.register__box__form;
    form_login.addEventListener("submit", (e) => {
        e.preventDefault();
        const { name, email, cpf, saldo } = form_login;
        let saldo2 = parseFloat(saldo.value);
        const users = {
            "nome": name.value,
            "email": email.value,
            "cpf": cpf.value,
            "saldo":saldo2
        };
    
        let validaCampos = validaCampo(name, email, cpf, saldo);
        if (validaCampos === false) {
            console.log(users)
            postAccount(users);
        }
    });
 
    function validaCampo(name, email, cpf, saldo) {
        const nomeInpt = document.getElementById("name");
        const emailInpt = document.getElementById("email");
        const cpfInpt = document.getElementById("cpf");
        const saldoInpt = document.getElementById("saldo");
        let valida = true;

        if (name.value == "" || email.value == "" || cpf.value == "" || saldo.value == "") {
            if (name.value == "") {
                nomeInpt.style.border = "1px solid red";
            }
            else {
                nomeInpt.style.border = "1px solid #D7D7D7";
            }

            if (email.value == "") {
                emailInpt.style.border = "1px solid red";
            }
            else {
                emailInpt.style.border = "1px solid #D7D7D7";
            }

            if (cpf.value == "") {
                cpfInpt.style.border = "1px solid red";
            }
            else {
                cpfInpt.style.border = "1px solid #D7D7D7";
            }

            if (saldo.value == "") {
                saldoInpt.style.border = "1px solid red";
            }
            else {
                saldoInpt.style.border = "1px solid #D7D7D7";
            }

        } else {
            valida = false;
        }

        return valida;
    }


})();