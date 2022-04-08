(() => {
    const btnTransaction = document.querySelector(".brand__btnTransaction");
    const btnCloser = document.querySelector(".modal__close");

    btnTransaction.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const sideMenu = document.querySelector(".menuMobile");

        if (sideMenu.style.display == "flex") {
            sideMenu.style.display == "none";
        };

        modal.style.display = "flex";
    });

    btnCloser.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
    })

})();