const btnForm = document.querySelector(".btn-form");
const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const messageForm = document.getElementById("message");
const groupName = document.querySelector(".group-name");
const groupEmail = document.querySelector(".group-email");
const groupMessage = document.querySelector(".group-message");
const scapeString = /([<>/$%&])/;

const err = [
    {
        input: "name",
        error: ""
    },
    {
        input: "email",
        error: ""
    },
    {
        input: "name",
        error: ""
    },
];

const toValidateName = () => {
    const errorText = document.querySelector(".group-name .error-text");
    err[0].error = "";
    let nameVal;
    if (nameForm.value.trim().length === 0) {
        err[0].error = "Este campo es obligatorio"
        errorText.style.opacity = "1";
        errorText.textContent = `${err[0].error}`;
        return false;
    }
    else if (nameForm.value.trim().length < 2) {
        err[0].error = "Debe contener mínimo 2 carácteres.";
        errorText.style.opacity = "1";
        errorText.textContent = `${err[0].error}`;
        return false;
    }
    else if (nameForm.value.match(scapeString) !== null) {
        err[0].error = "Formato no válido."
        errorText.style.opacity = "1";
        errorText.textContent = `${err[0].error}`;
        return false;
    }
    else nameVal = nameForm.value.trim();
    if (nameVal) {
        errorText.style.opacity = "0";
        errorText.textContent = `${err[0].error}`;
        return true;
    }
}

const toValidateEmail = () => {
    const errorText = document.querySelector(".group-email .error-text");
    err[1].error = "";
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailVal;
    if (emailForm.value.trim().length === 0) {
        err[1].error = "Este campo es obligatorio";
        errorText.style.opacity = "1";
        errorText.textContent = `${err[1].error}`;
        return false;
    }
    else if (!emailReg.test(emailForm.value)) {
        err[1].error = "Formato no válido."
        errorText.style.opacity = "1";
        errorText.textContent = `${err[1].error}`;
        return false;
    }
    else emailVal = emailForm.value.trim();
    if (emailVal) {
        errorText.style.opacity = "0";
        errorText.textContent = `${err[1].error}`;
        return true;
    }
}

const toValidateMessage = () => {
    const errorText = document.querySelector(".group-message .error-text");
    err[2].error = "";
    let mesVal
    if (messageForm.value.trim().length < 15) {
        err[2].error = "El mensaje debe contener mínimo 15 carácteres"
        errorText.style.opacity = "1";
        errorText.textContent = `${err[2].error}`;
        return false;
    }
    else if (messageForm.value.match(scapeString) !== null) {
        err[2].error = "Formato no válido."
        errorText.style.opacity = "1";
        errorText.textContent = `${err[2].error}`;
        return false;
    }
    else mesVal = messageForm.value.trim();
    if (mesVal) {
        errorText.style.opacity = "0";
        errorText.textContent = `${err[2].error}`;
        return true;
    }
}

btnForm.addEventListener("click", e => {
    e.preventDefault();
    let checkName = toValidateName();
    let checkEmail = toValidateEmail();
    let checkMessage = toValidateMessage();
    // if(check)
})