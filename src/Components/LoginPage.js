import React, { useState } from 'react';
import { LogoImg, LoginForm, InputField, LoginButton } from './index'
import Footer from './../Components/Footer';
import { validatePassword, validateUsername } from './utils'
import history from './History';

const handleLogin = (username, password) => {
    const validateUser = validateUsername(username)
    const validatePass = validatePassword(password)
    console.log(validatePass, validateUser);
    if(validateUser !== 'ok'){
        alert(validateUser)
        return
    }
    if(validatePass !== 'ok'){
        alert(validatePass)
        return
    }
    alert('Successfully Login')
    history.push('/Blog');
}

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login_page">
            <LogoImg />
            <LoginForm>
                <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)}/><br/>
                <InputField placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)}/><br/> <br/>
                <LoginButton onClick={() => handleLogin(username, password)}>Sign In</LoginButton>
            </LoginForm>
            <Footer />        
        </div>
    )
}

export default LoginPage