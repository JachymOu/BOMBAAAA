let registrationDone = false;

function submitFunction() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Set username & password");
        return;
    }

    if (registrationDone) {
        const user = {
            username, 
            password    
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registered!");
    } else {
        alert("Password requirements not met.");
    }
}

function passwordCheck() {
    const password = document.getElementById("password").value;

    const numberCheck = document.getElementById("number");
    const lowerCaseCheck = document.getElementById("lowercase");
    const upperCaseCheck = document.getElementById("uppercase");
    const lengthCheck = document.getElementById("length");
    const specialCheck = document.getElementById("special");

    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasUpper = /[A-Z]/.test(password);
    let hasLength = password.length >= 8;

    numberCheck.innerHTML = hasNumber ? "Contains a number: ✔" : "Contains a number: ❌";
    lowerCaseCheck.innerHTML = hasLower ? "Contains a lowercase letter: ✔" : "Contains a lowercase letter: ❌";
    upperCaseCheck.innerHTML = hasUpper ? "Contains an uppercase letter: ✔" : "Contains an uppercase letter: ❌";
    lengthCheck.innerHTML = hasLength ? "Contains at least 8 characters: ✔" : "Contains at least 8 characters: ❌";
    specialCheck.innerHTML = hasSpecial ? "Contains a special character: ✔" : "Contains a special character: ❌";

    registrationDone = hasNumber && hasLower && hasUpper && hasLength;
}

setInterval(passwordCheck, 10);
