const myFrom = document.getElementById("myForm");
//
myFrom.addEventListener(
    "submit",
    function (value) {
      value.preventDefault()
      let validForm=true;
      let userError = document.getElementById("userError");
      let emailError = document.getElementById("emailError");
      let firstError = document.getElementById("firstError");
      let lastError = document.getElementById("lastError");
      let nickError=document.getElementById("nickError");
      let phoneError =document.getElementById("phoneError"); 
         let validation = userNameValidator();
      if (!validation) {
        userError.style.display = "block";
      } else {
         userError.style.display = "none";
         validForm=false;
      }
      validation = ValidateEmail();
      if (!validation) {
         emailError.style.display = "block";
      } else {
          emailError.style.display = "none";
          validForm=false;
      }
      validation=validateFirstNames();
      if (!validation) {
         firstError.style.display ="block";
      } else {
         firstError.style.display ="none";
         validForm=false;
      }
      validation = validateLastNames();
      if (!validation) {
         lastError.style.display ="block";
      } else {
         lastError.style.display ="none";
         validForm=false;
      }
      validation=validateNickName();
      if(!validation){
        nickError.style.display="block";
      }
      else{
        nickError.style.display="none";
        validForm=false;
      }
      validation = validatePhoneNumber();
      if (!validation) {
        phoneError.style.display ="block";
      } else {
         phoneError.style.display ="none";
         validForm=false;
      }
      const optionsValue =  document.querySelectorAll("input[name='selectPref']:checked")[0].value;
      if (validForm) {
        let output = '';
        if (optionsValue == 'GiveMeASite') {
            output = `http://${firstName}_${lastName}.com`;
        } else {
            output = `${firstName}.${lastName}`;
        };
      };
      submitFormular();
    },false);
  
  //
    const userNameValidator = () => {
    const userName = document.getElementById("userName").value;
    let userNameSplit = userName.split("");
  
    if (userName.length > 4 && userNameValidatorTemplate.test(userName)) {
      return true;
    }
  }
  //
  const emailValidatorTemplate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const ValidateEmail = (mail) => {
    let emailValidator = document.getElementById("emailAddress").value;
    if (emailValidatorTemplate.test(emailValidator)) {
      return true;
    }
  };
  
  ///
  const nameValidatorTemplate=/^[a-zA-Z-]*$/;
  const validateFirstNames = () => {
    const firstName = document.getElementById("firstName").value;
    if (nameValidatorTemplate.test(firstName)&&firstName.length>2 ) {
      return true;
    }
    return false;
  };
  ///
  const validateLastNames = () => {
    const lastName = document.getElementById("lastName").value;
    if (lastName.length > 2 && nameValidatorTemplate.test(lastName)) {
      return true;
    }
    return false;
  };
  const validateNickName=()=>{
    const nickName=document.getElementById("nickName");
    if(nickName.value!==""){
      return true;
    }
    return false;
  }
  
  const validatePhoneNumber = () => {
    const phoneNumber = document.getElementById("numberTelephone").value;
    if (phoneNumber.length == 10) {
            return true;
    }
    return false;
  };