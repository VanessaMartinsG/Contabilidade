import { postAccount } from "./apiHandler.js"
import { errorAlert } from "./sweetAlert.js"

(() => {

    const form_login = document.forms.register__box__form;
    const { name, email, cpf, saldo } = form_login;

    cpf.addEventListener('keypress', (e) => {
        let cpfLength = cpf.value.length;

        if (isNaN(cpf.value[cpfLength - 1])) {
            cpf.value = cpf.value.substring(0, cpfLength - 1);
            return false;
        }

        if (cpfLength === 3 || cpfLength === 7) {
            cpf.value += "."
        } else
            if (cpfLength === 11) {
                cpf.value += "-"
            }
    });

    saldo.addEventListener('keypress', (e) => {
        let saldoLength = saldo.value.length;

        if (isNaN(saldo.value[saldoLength - 1]) && saldo.value[saldoLength - 1] != "." && saldo.value[saldoLength - 1] != ",") {
            saldo.value = saldo.value.substring(0, saldoLength - 1);
            return false;
        }
    });


    form_login.addEventListener("submit", async (e) => {
        e.preventDefault();

        const user = {
            name: name.value,
            email: email.value,
            cpf: cpf.value.replaceAll("-", "").replaceAll(".", ""),
            total_money: parseFloat(saldo.value.replaceAll(",", "."))
        };

        let validaCampos = validaCampo(name, email, cpf, saldo);
        if (validaCampos === false) {
            const response = await postAccount(user);
            form_login.reset();
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