

function validateUserName(username) {
    if (username) {
        return true;
    } else {
        return false;
    }
}

function validatePassword(password) {
    if (password) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    if (email) {
        return true;
    } else {
        return false;
    }
}


const ValidationService = {
    validateUserName,
    validatePassword,
    validateEmail
}

export default ValidationService