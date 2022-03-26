(() => {
const baseURL = "http://localhost:3000";
const form_login =  document.forms.register__box__form
console.log(form_login);
form_login.addEventListener("submit",(e)=>{
    e.preventDefault();
    const{name,email,cpf,saldo} = form_login;
    const users = {
        "nome":name.value,
        "email":email.value,
        "cpf":cpf.value,
        "saldo":saldo.value
    };

    createUser(users);
})

async function createUser(users){
    let response = await fetch(`${baseURL}/users`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(users),
    });
    userResponse = await response.json();

}

})();