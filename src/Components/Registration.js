import React, { useState } from 'react';
import { LogoImg2, LoginForm, InputField, LoginButton } from './Index'
import Footer from './../Components/Footer';
import { validatePassword, validateUsername, validatePhone, validateEmail } from './utils'

const handleRegister = (username, password, email, phone) => {
    const validateUser = validateUsername(username)
    const validatePass = validatePassword(password)
    const validateEm = validateEmail(email)
    const validatePh = validatePhone(phone)
    console.log(validatePass, validateUser);
    if(validateUser !== 'ok'){
        alert(validateUser)
        return
    }
    if(validatePass !== 'ok'){
        alert(validatePass)
        return
    }
    if(validateEm !== 'ok'){
        alert(validateEm)
        return
    }
    if(validatePh !== 'ok'){
        alert(validatePh)
        return
    }
    alert('Successfully Register')
}

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="login_page">
            <br/><br/>
            <LogoImg2 />
            <br/>
            <LoginForm>
                <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)}/><br/>
                <InputField placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)}/><br/>
                <InputField placeholder="Phone" autocomplete="off" id="phone" name="phone" onChange={e => setPhone(e.target.value)}/><br/>
                <InputField placeholder="Email" autocomplete="off" id="email" name="email" onChange={e => setEmail(e.target.value)}/><br/> <br/>
                <LoginButton onClick={() => handleRegister(username, password, email, phone)}>Sign Up</LoginButton>
            </LoginForm>
            <Footer />        
        </div>
    )
}

export default Registration;