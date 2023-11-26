const validations = {
    nameValidation: (name) => {
        if(name !== '' && name !== undefined) {
            return true;
        } else {
            return false 
        }
    },

    emailValidation: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.match(emailRegex)) {
            return true;
        } else {
            return false;
        }
    },

    passwordValidation: (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
            if(password.match(regex)) {
                return true;
        } else {
            return false 
        }
    }
}


export {validations}








