export const validatePassword = (password) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (password.length < 8)
        return 'password must be at least 8 chars';
    else if (!password.match(letterNumber)) {
        return 'password must includes just letter and numbers';
    }
    else
        return 'ok';
}

export const validateUsername = (username) => {
    const letterNumber = /^[0-9a-zA-Z_]+$/;
    if (username.length < 3)
        return 'username must be at least 4 chars';
    else if (!username.match(letterNumber)) {
        return 'username must includes just letter and numbers';
    }
    else
        return 'ok';
}

export const validatePhone = (phone) => {
    const numbers = /^[0-9]+$/;
    if (phone.length !== 10)
        return 'phone number must be exactly 10 digits';
    else if (!phone.match(numbers)) {
        return 'phone number must includes just digits';
    }
    else
        return 'ok';
}

export const validateEmail = (email) => {
    if (!email.includes('@') || !email.includes('.'))
        return 'illegal email';
    else
        return 'ok';
}

export const validatePINcode = (pinCode) => {
    if (pinCode.length === 12) { // must be 12 chars
        if (pinCode.includes('O') && pinCode.includes('K') && pinCode.includes('l') && pinCode.includes('n')) { // must be includes O K l n
            if (pinCode.includes('494')) { // must be includes 494 
                if (pinCode.includes('N!') || pinCode.includes('L!') || pinCode.includes('?o') || pinCode.includes('?k')) { // must be includes n! or l! or ?O or ?K
                    if (pinCode.includes('_') && pinCode.includes('0')) { //must be includes 0 and _
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

export const validateEmptyFields = (field) => {
    return field.length === 0
}