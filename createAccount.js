let firstLastName, email, password;

let formInputChange = (input) => {
  // console.log(input.value);
  if (input.id === "firstNameInput" || input.id === "lastNameInput") {
    if (input.value.length >= 2 && input.value.length <= 15) {
      //   console.log(input.value);
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      firstLastName = true;
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      firstLastName = false;
    }
  }

  if (
    input.value.length > 0 &&
    input.value[0] === input.value[0].toUpperCase()
  ) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    firstLastName = true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    document.getElementById("firstNameInvalidFeedback").innerText =
      "First should be Uppercase";
    firstLastName = false;
  }

  console.log("Name = " + firstLastName);

  //   if (input.id === "emailInput") {
  //     const reg = /\D{4,}\@\D{4,}\.\D{2,}/g;
  //     if (input.value.match(reg) !== null) {
  //       input.classList.add("is-valid");
  //       input.classList.remove("is-invalid");
  //     } else {
  //       input.classList.remove("is-valid");
  //       input.classList.add("is-invalid");
  //     }
  //   }

  if (input.id === "emailInput") {
    if (validator.isEmail(input.value)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      email = true;
      //
      new_email = input.value;
      if(localStorage.getItem('emails') == null) {
        localStorage.setItem('emails', '[]');
      }
      old_emails = JSON.parse(localStorage.getItem('emails'));
      old_emails.push(new_email);
      localStorage.setItem('emails', JSON.stringify(old_emails));
      //
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      email = false;
    }
  }

  console.log("Email = " + email);

  if (input.id === "passwordInput") {
    if (input.value.length >= 7) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      password = true;
      //
      new_password = input.value;
      if(localStorage.getItem('passwords') == null) {
        localStorage.setItem('passwords', '[]');
      }
      old_passwords = JSON.parse(localStorage.getItem('passwords'));
      old_passwords.push(new_password);
      localStorage.setItem('passwords', JSON.stringify(old_passwords));
      //
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      password = false;
    }
  }

  console.log("Pass = " + password);
};

let isTicked = (input) => {
if (firstLastName === true && email === true && password === true 
      && document.getElementById("checkInput").checked === true) {
    console.log("yes all true");
    console.log("yes checked");
    document.getElementsByTagName("button")[0].disabled = false; 
    // document.getElementsByTagName("button")[0].location="www.google.com";
  }
}

let pageRedirect = (input) => {
  console.log("redirected");
  window.location.href = "/Users/mariameirosu/Desktop/FrontEnd/visualStudio/Tic-Tac-Toe+Register+Login/loginPage.html";
}



