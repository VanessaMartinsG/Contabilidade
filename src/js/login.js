import {errorAlert} from './sweetAlert.js'
(() => {

    let baseURL = "https://money-control-backend.herokuapp.com";
  
    let cpf = document.querySelector('.login__form__cpf')
    let btn = document.querySelector('.login__form__btlogin');


  


    btn.addEventListener("click", (e) => {
        e.preventDefault();


        if (cpf.value == "") {
            cpf.style.border = "1px solid red";

        } else {
            cpf.style.border = "1px solid #D7D7D7";

        }
        getUserList();
    })

    async function getUserList() {
        let listUser = [];
        let userValid = {
            name:'',
            email:'',
            cpf:'',
            total_money:''
        } 
    

        
       const response = await fetch(`${baseURL}/account`, {
            headers: { "cpf": cpf.value }
         
        });
        const userList = await response.json();
        listUser = userList;
          
           if(cpf.value == listUser.cpf){
                userValid = {
                   name: listUser.name,
                   email:listUser.email,
                   cpf:listUser.cpf, 
                   total_money:listUser.total_money,
               }
           } 
      
        if(response.status == 200){
            window.location.href="http://127.0.0.1:5500/src/html/Validate.html"
            localStorage.setItem('userValid',JSON.stringify(userValid))  
        }else

        if(response.status == 400){
           errorAlert("Cpf Inválido");
        }
    }
})();