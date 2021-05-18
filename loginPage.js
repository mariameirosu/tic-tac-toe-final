function pageRedirectToGame() {
    window.location.href="/Users/mariameirosu/Desktop/FrontEnd/visualStudio/Tic-Tac-Toe+Register+Login/tic-tac-toe_wReset.html";
}

function checkEmail(input) {
    email = input.value;
    emails = JSON.parse(localStorage.getItem('emails'));
    emailRegistered=false;
    for(i=0; i<emails.length; i++) {
        if(email===emails[i]) {
            console.log(email);
            console.log(emails[i]);
            index = i;
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            emailRegistered = true;
            break;
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            emailRegistered = false;
        }
    }
}

function checkPass(input) {
    password = input.value;
    passwords = JSON.parse(localStorage.getItem('passwords'));
    correctPassword = passwords[index];
    
    if(password===correctPassword) {
        console.log(password);
        console.log(correctPassword);
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        passwordRegistered = true;
        
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        passwordRegistered = false;
    }

    if(emailRegistered === true && passwordRegistered === true) {
        document.getElementById('loginButton').disabled=false;
        console.log("login button activated");
    }
}