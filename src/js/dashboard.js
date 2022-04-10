
(() => {
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

    function modalEdit() {

        const modal = document.querySelector(".modal");
        const edit = document.querySelectorAll(".reg__edit");

        edit.forEach(item => {
            item.addEventListener("click", (e) => {
                const title = document.querySelector(".modal__title");
                const btnEdit = document.querySelector(".modal__form__btnCadastrar");
                if (modal.classList.contains("hidden")) {
                    modal.classList.remove("hidden");
                }
                title.textContent = "Editar transação";
                btnEdit.textContent = "Editar";
            });
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
                modal.classList.add("hidden");
            }
        });

        btnCloser.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

    }

    function init() {
        menuMobile();
        modalRegister();
        modalEdit();
        closeModals();
    }

    if (document.body.classList.contains("dashboardScreen"))
        init();
})();
