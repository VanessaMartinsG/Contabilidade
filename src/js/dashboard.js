import { getAccount } from './apiHandler.js';


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

    function openAndCloseModal() {
        const modal = document.querySelector(".modal");
        const btnTransaction = document.querySelectorAll(".brand__btnTransaction");
        const btnCloser = document.querySelector(".modal__close");

        btnTransaction.forEach(btn => {
            btn.addEventListener("click", () => {
                if (modal.classList.contains("hidden")) {
                    modal.classList.remove("hidden");
                }
            });
        });

        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal") || e.target.parentNode.classList.contains("modal__close")) {
                modal.classList.add("hidden");
            }
        });

        btnCloser.addEventListener("click", () => {
            modal.classList.add("hidden");
        })
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
        openAndCloseModal();
        setAccountData();
    }

    if (document.body.classList.contains("dashboardScreen")) {
        if (window.localStorage.getItem('user')) {
            init();
        } else {
            window.location.href = loginWindow;
        }
    }
})();
