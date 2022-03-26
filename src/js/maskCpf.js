(() => {
   
   const cpf = document.querySelector("#login__form__cpf");
   
   cpf.addEventListener('keypress',()=>{
      let cpfLength = cpf.value.length;
      
      if(isNaN(cpf.value[cpfLength-1])){
         cpf.value = cpf.value.substring(0, cpfLength-1); 
         return false;
      }

      if(cpfLength === 3 || cpfLength === 7){
         cpf.value += "." 
      }else
      if(cpfLength === 11){
         cpf.value += "-"
      }
     
   })
   
   })();
 