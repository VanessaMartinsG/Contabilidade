(() => {
    const btnTransaction = document.querySelectorAll(".brand__btnTransaction");
    const btnCloser = document.querySelector(".modal__close");
    console.log(btnTransaction);

    btnTransaction.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = document.querySelector(".modal");
            const sideMenu = document.querySelector(".menuMobile");

            modal.style.display = "flex";
            console.log("Click Mobile");
        });
    });


    btnCloser.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
    })

})();