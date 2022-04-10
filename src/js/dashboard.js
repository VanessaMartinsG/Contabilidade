import { getAccount } from './apiHandler.js';
import { submitTaskForm } from './modal.js'
import { updateStatements } from './statementTable.js'


export async function setUserMoneyCards(user) {
    const userAccount = await getAccount(user);

    if (userAccount != null) {
        const cardEntries = document.querySelector(".totalEntries");
        const cardExit = document.querySelector(".totalExit");
        const cardTotal = document.querySelector(".totalMoney");

        cardEntries.textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(userAccount.total_enter_money);
        cardExit.textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(userAccount.total_exit_money);
        cardTotal.textContent = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(userAccount.total_money);
    }
}

export function resetTaskFormMode() {
    const modal = document.querySelector(".modal");
    modal.classList.add("hidden");
    const task_form = document.forms.task__form;
    if (task_form.classList.contains("form__editMode"))
        task_form.classList.remove("form__editMode");
    if (task_form.classList.contains("form__registerMode"))
        task_form.classList.remove("form__registerMode");
}

export function modalEdit() {

    const modal = document.querySelector(".modal");
    const edit = document.querySelectorAll(".reg__edit");

    edit.forEach(item => {
        item.addEventListener("click", (e) => {
            const title = document.querySelector(".modal__title");
            const btnEdit = document.querySelector(".modal__form__btnCadastrar");
            if (modal.classList.contains("hidden")) {
                modal.classList.remove("hidden");
                const task_form = document.forms.task__form;
                task_form.classList.add("form__editMode");
            }
            title.textContent = "Editar transação";
            btnEdit.textContent = "Editar";
        });
    });
}

(() => {
    const mainWindow = "http://127.0.0.1:5501/src/html/dashboard.html";

    function menuMobile() {
        const menuHamburguer = document.querySelector(".mobileHamburguer");
        const menuMobile = document.querySelector(".menuMobile");

        menuHamburguer.addEventListener("click", () => {
            if (menuMobile.style.display == "flex") {
                menuMobile.style.display = "none";
            } else {
                menuMobile.style.display = "flex";
            }
        });

        menuMobile.addEventListener("click", (e) => {
            if (e.target.classList.contains("menuMobile")) {
                menuMobile.style.display = "none";
            }
        });
    }

    function modalRegister() {
        const modal = document.querySelector(".modal");
        const btnTransaction = document.querySelectorAll(".brand__btnTransaction");

        btnTransaction.forEach(btn => {
            btn.addEventListener("click", () => {
                const title = document.querySelector(".modal__title");
                const btnEdit = document.querySelector(".modal__form__btnCadastrar");
                if (modal.classList.contains("hidden")) {
                    modal.classList.remove("hidden");
                    const task_form = document.forms.task__form;
                    task_form.classList.add("form__registerMode");
                }
                title.textContent = "Cadastrar transação";
                btnEdit.textContent = "Cadastrar";
            });
        });

        closeModals();
    }

    function closeModals() {
        const modal = document.querySelector(".modal");
        const btnCloser = document.querySelector(".modal__close");

        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal") || e.target.parentNode.classList.contains("modal__close")) {
                resetTaskFormMode();
            }
        });

        btnCloser.addEventListener("click", () => {
            resetTaskFormMode();
        });

    }

    function setAccountData() {
        const nameUserMobile = document.querySelector(".brand__userName--mobile");
        const nameUser = document.querySelector(".brand__userName");
        let userData = JSON.parse(window.localStorage.getItem('user'));

        nameUser.textContent = userData.name;
        nameUserMobile.textContent = "Olá" + " " + userData.name + " " + "!";
        setUserMoneyCards(userData);

    }

    function init() {
        menuMobile();
        modalRegister();
        modalEdit();
        closeModals();
        setAccountData();
        updateStatements();
    }

    if (document.body.classList.contains("dashboardScreen")) {
        if (window.localStorage.getItem('user')) {
            init();
        } else {
            window.location.href = loginWindow;
        }
    }
})();
