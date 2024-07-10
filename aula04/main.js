function onChangeEmail() {
    toggleButtonDisable();
    toggleEmailErros(); // Corrigido o nome da função
}

function onChangePassword() {
    toggleButtonDisable();
    togglePasswordErros(); // Corrigido o nome da função
}

function login1() {

  
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "C:/Users/samys/OneDrive/Documentos/GitHub/JAVASCRIPT/aula04/home/home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
   

}


function getErrorMessage(error){
    if(error.code == "auth/invalid-credential"){
        return "Usuario não encontrado";
    }
    return error.message;
}

function register() {
    window.location.href = "C:/Users/samys/OneDrive/Documentos/GitHub/JAVASCRIPT/aula04/register/register.html";
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErros() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErros() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();

    form.recoverPassword().disabled = !emailValid;

    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    return !!password; // Retorna true se a senha não estiver vazia
}

const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    password: () => document.getElementById('password'),
    loginButton: () => document.getElementById('login'),
    recoverPassword: () => document.getElementById('recover-password-button')
};
