const btSubmit = document.getElementById("submit");

btSubmit.onclick = function(e) {

  e.preventDefault();
  
  const nameField = document.getElementById("user-name");
  const emailField = document.getElementById("user-email");
    
  const re = /\S+@\S+\.\S+/;
  const isEmail =re.test(emailField.value);
   
  if(!emailField.value || !isEmail || !nameField) {
        
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true); 
    
  }else{

    /* storeEmail(emailField.value); */
    emailError.classList.remove("visible");
    emailField.classList.remove("invalid");
    nameField.value = "";
    emailField.value = "";

    const modal = document.getElementById("modal");
    modal.style.display = "none";
    
  }
}