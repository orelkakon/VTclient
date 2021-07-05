import React, { useState } from 'react';
import { LogoImg, LoginForm, InputField, LoginButton } from './index'
import Footer from './../Components/Footer';
import { validateEmptyFields } from './utils'
import config from './../config.json'
import axios from 'axios'

const handleLogin = async(username, password) => {
    if(validateEmptyFields(username) || validateEmptyFields(password)){
        alert('Empty field');
        return;
    }
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.login}`,
        data: {
            username: username,
            password: password
        } 
    }).then(result => {
        if (result.data) {
            alert('Successfully Login')
        }
        else {
            alert('Failed Login')
        }
    }).catch(err => {
        alert(err);
    });
}

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login_page">
            <LogoImg />
            <LoginForm>
                <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)} /><br />
                <InputField placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)} /><br /> <br />
                <LoginButton onClick={() => handleLogin(username, password)}>Sign In</LoginButton>
            </LoginForm>
            <Footer />
        </div>
    )
}

export default LoginPage