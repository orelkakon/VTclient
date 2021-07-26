import React, { useState } from 'react';
import { LogoImg, LoginForm, InputField, LoginButton, LogoutButton, LogoutForm } from './index'
import Footer from './../Components/Footer';
import { validateEmptyFields } from './utils'
import config from './../config.json'
import axios from 'axios'
import { notify } from './../LandPage';


const isLogin = (username, password) => {
    return axios({
        method: 'post',
        url: `${config.protocol}://${config.host}${config.urls.login}`,
        data: {
            username: username,
            password: password
        }
    })
}

const getMyPincode = (user) => {
    return axios({
        method: 'post',
        url: `${config.protocol}://${config.host}${config.urls.getMyPinCode}`,
        data: {
            username: user
        }
    })
}

const handleLogin = async(username, password, setLogged, english) => {
    if (validateEmptyFields(username) || validateEmptyFields(password)) {
        await notify(english ? "Empty field!" : "ישנן שדות ריקים")
        return;
    }
    const login = isLogin(username, password)
    const isPremium = getMyPincode(username)
    axios.all([login, isPremium]).then(axios.spread((...response) => {
        const isLoggedIn = response[0];
        const isPremiumIn = response[1];
        if (isLoggedIn.data && isPremiumIn.data !== "") {
            sessionStorage.setItem('session', `username: ${username}, premium: yesPremium;`)
            notify(english ? 'successful Login' : 'התחברות מוצלחת')
            setLogged(true)
        }
        else if (isLoggedIn.data) {
            sessionStorage.setItem('session', `username: ${username},`)
            notify(english ? 'successful Login' : 'התחברות מוצלחת')
            setLogged(true)
        }
        else {
            notify(english ? 'Failed Login' : 'התחברות נכשלה')
        }
    }));
}

const handleLogout = async (username, setLogged, english) => {
    notify(english ? `Bye Bye ${username}` : `${username} ביי ביי`)
    sessionStorage.removeItem('session')
    
    setLogged(false)
}

const LoginPage = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login_page">      
            <LogoImg />
            {
                props.logged ?
                    <LogoutForm>
                        <LogoutButton onClick={() => handleLogout(sessionStorage.getItem('session').substring(sessionStorage.getItem('session').indexOf(' ') + 1, sessionStorage.getItem('session').indexOf(',')), props.setLogged, props.english)}>{props.english ? 'Logout': 'התנתק'}</LogoutButton>
                    </LogoutForm>
                    :
                    <LoginForm direction={props.english ? 'ltr': 'rtl'}>
                        <InputField placeholder={props.english ? "Username": 'שם משתמש'} autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)} /><br />
                        <InputField type="password" placeholder={props.english ? "Password": 'סיסמה'} autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)} /><br /> <br />
                        <LoginButton onClick={() => handleLogin(username, password, props.setLogged, props.english)}>{props.english ? 'Sign In':'התחבר'}</LoginButton>
                    </LoginForm>
            }
            <Footer />
        </div>
    )
}

export default LoginPage