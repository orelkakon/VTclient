export const validatePassword = (password, english) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (password.length < 8)
        return english ? 'password must be at least 8 chars' : "סיסמה חייבת להכיל לפחות 8 תווים";
    else if (!password.match(letterNumber)) {
        return english ? 'password must includes just letter and numbers': "סיסמה חייבת להכיל רק מספרים ואותיות";
    }
    else
        return 'ok';
}

export const validateUsername = (username, english) => {
    const letterNumber = /^[0-9a-zA-Z_]+$/;
    if (username.length < 3)
        return english ? 'username must be at least 4 chars' : "שם משתמש חייב להכיל לפחות 4 תווים";
    else if (!username.match(letterNumber)) {
        return english ? 'username must includes just letter and numbers': "שם משתמש חייב להכיל רק מספרים ואותיות";
    }
    else
        return 'ok';
}

export const validatePhone = (phone, english) => {
    const numbers = /^[0-9]+$/;
    if (phone.length !== 10)
        return english ? 'phone number must be exactly 10 digits': "מספר פלאפון חייב להכיל 10 ספרות בדיוק";
    else if (!phone.match(numbers)) {
        return english ? 'phone number must includes just digits': "מספר פלאפון חייב להכיל רק ספרות";
    }
    else
        return 'ok';
}

export const validateEmail = (email , english) => {
    if (!email.includes('@') || !email.includes('.'))
        return english ? 'illegal email' : "דואר אלקטרוני לא תקין";
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