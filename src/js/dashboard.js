(() => {
    const menuHamburguer = document.querySelector(".mobileHamburguer");

    menuHamburguer.addEventListener("click", () => {
        const sideMenu = document.querySelector(".menuMobile");
        const bodyMain = document.querySelector("main");

        if (sideMenu.style.display == "flex") {
            sideMenu.style.display = "none";
            bodyMain.style.background = "#F0F2F5";
        } else {
            sideMenu.style.display = "flex";
            bodyMain.style.background = "rgba(153, 142, 142, 0.53)";
        }
    });

})();