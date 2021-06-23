
export const validatePassword = (password) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (password.length < 8) 
        return 'password must be at least 8 chars';
    else if(!password.match(letterNumber)){
        return 'password must includes just letter and numbers';
    }
    else
        return 'ok';
}

export const validateUsername = (username) => {
    const letterNumber = /^[0-9a-zA-Z_]+$/;
    if (username.length < 3) 
        return 'username must be at least 4 chars';
    else if(!username.match(letterNumber)){
        return 'username must includes just letter and numbers';
    }
    else
        return 'ok';
}

export const validatePhone = (phone) => {
    const numbers = /^[0-9]+$/;
    if (phone.length === 10) 
        return 'phone number must be exactly 10 digits';
    else if(!phone.match(numbers)){
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