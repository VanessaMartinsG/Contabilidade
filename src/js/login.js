import { errorAlert } from './sweetAlert.js'
import { getAccount } from './apiHandler.js';
(() => {

    const form_login = document.forms.login__form;
    const mainWindow = "http://127.0.0.1:5501/src/html/dashboard.html";

    function cpfFormatter() {
        const { cpf } = form_login;
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
    }

    function checkCpf() {
        const { cpf } = form_login;

        if (cpf.value.trim() == "") {
            cpf.style.border = "1px solid red";
            form_login.reset();
            return false;

        } else {
            cpf.style.border = "1px solid #D7D7D7";
            return true;
        }

    }

    function submitLogin() {
        const { name, email, cpf, saldo } = form_login;
        form_login.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (checkCpf()) {
                const user = {
                    cpf: cpf.value.replaceAll("-", "").replaceAll(".", "")
                };

                const response = await getAccount(user);
                if (response == null)
                    form_login.reset();
                else {
                    console.log(response);
                    const userAccount = { name: response.name, cpf: response.cpf }
                    localStorage.setItem('user', JSON.stringify(userAccount));
                    window.location.href = mainWindow;
                }
            }
        });
    }

    function init() {
        cpfFormatter();
        submitLogin();
    }

    if (document.body.classList.contains("loginScreen"))
        init();
})();