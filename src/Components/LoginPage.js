import React, { useState } from 'react';
import { LogoImg, LoginForm, InputField, LoginButton } from './Index'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login_page">
            <LogoImg />
            <LoginForm>
                <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)}/><br/>
                <InputField placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)}/><br/> <br/>
                <LoginButton onClick={() => alert("orel kakon")}>Sign In</LoginButton>
            </LoginForm>
        </div>
    )
}

export default LoginPage