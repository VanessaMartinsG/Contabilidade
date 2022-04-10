(() => {

    const loginWindow = "http://127.0.0.1:5501/src/html/login.html";
    const registerWindow = "http://127.0.0.1:5501/src/html/register.html";

    function resetUserCredentials() {
        const loginBtns = document.querySelectorAll(".signIn__login");
        const registerBtns = document.querySelectorAll(".signIn__register");

        loginBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.href = loginWindow;
                localStorage.removeItem('user');
            });
        });

        registerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.href = registerWindow;
                localStorage.removeItem('user');
            });
        });
    }


    function init() {
        resetUserCredentials();

    }

    init();

})();