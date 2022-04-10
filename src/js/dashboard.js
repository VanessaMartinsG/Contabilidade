
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

    function init() {
        menuMobile();
        openAndCloseModal();
    }

    if (document.body.classList.contains("dashboardScreen"))
        init();
})();
