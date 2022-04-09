(() => {
    const modal = document.querySelector(".modal");

    function openAndCloseModal() {
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

        // btnCloser.addEventListener("click", () => {
        //     const modal = document.querySelector(".modal");
        //     modal.style.display = "none";
        // })
    }

    openAndCloseModal();
})();