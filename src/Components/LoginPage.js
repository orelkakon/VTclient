import React, { useState } from 'react';
import { LogoImg, LoginForm, InputField, LoginButton, LogoutButton, LogoutForm } from './index'
import Footer from './../Components/Footer';
import { validateEmptyFields } from './utils'
import config from './../config.json'
import axios from 'axios'
import history from './History';
import { notify } from './../LandPage';


const isLogin = (username, password) => {
    return axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.login}`,
        data: {
            username: username,
            password: password
        }
    })
}

const getMyPincode = (user) => {
    return axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getMyPinCode}`,
        data: {
            username: user
        }
    })
}

const handleLogin = async(username, password) => {
    if (validateEmptyFields(username) || validateEmptyFields(password)) {
        await notify("Empty field!")
        return;
    }
    const login = isLogin(username, password)
    const isPremium = getMyPincode(username)
    axios.all([login, isPremium]).then(axios.spread((...response) => {
        const isLoggedIn = response[0];
        const isPremiumIn = response[1];
        if (isLoggedIn.data && isPremiumIn.data !== "") {
            document.cookie = `username: ${username}, premium: yesPremium;`
            notify('Successfully Login')
            history.push('/AboutAndContact')
            window.location.reload()
        }
        else if (isLoggedIn.data) {
            document.cookie = `username: ${username},`
            notify('Successfully Login')
            history.push('/AboutAndContact')
            window.location.reload()
        }
        else {
            notify('Failed Login')
        }
    }));
}

const handleLogout = (username) => {
    notify(`Bye Bye ${username}`)
    document.cookie = `username: ${username}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login_page">
            
            <LogoImg />
            {
                document.cookie.includes("username") ?
                    <LogoutForm>
                        <LogoutButton onClick={() => handleLogout(document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(',')))}>Logout</LogoutButton>
                    </LogoutForm>
                    :
                    <LoginForm>
                        <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)} /><br />
                        <InputField type="password" placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)} /><br /> <br />
                        <LoginButton onClick={() => handleLogin(username, password)}>Sign In</LoginButton>
                    </LoginForm>
            }
            <Footer />
        </div>
    )
}

export default LoginPage