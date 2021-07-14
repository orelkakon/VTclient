import React, { useState } from 'react';
import { LogoImg2, LoginForm, InputField, LoginButton } from './index'
import Footer from './../Components/Footer';
import { validatePassword, validateUsername, validatePhone, validateEmail } from './utils'
import config from './../config.json'
import axios from 'axios'
import { notify } from './../LandPage';



const handleRegister = async (username, password, confirmPassword, email, phone, english) => {
    const validateUser = validateUsername(username, english)
    const validatePass = validatePassword(password, english)
    const validateEm = validateEmail(email, english)
    const validatePh = validatePhone(phone, english)
    if (validateUser !== 'ok') {
        notify(validateUser )
        return
    }
    if (validatePass !== 'ok') {
        notify(validatePass)
        return
    }
    if (validateEm !== 'ok') {
        notify(validateEm)
        return
    }
    if (validatePh !== 'ok') {
        notify(validatePh)
        return
    }
    if (confirmPassword !== password) {
        notify(english ? 'passwords are not identical' : "סיסמאות אינן זהות")
        return
    }
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.register}`,
        data: {
            username: username,
            password: password,
            phone: phone,
            email: email
        }
    }).then(result => {
        if (result.data) {
            notify(english ? 'successful Register' : "הרשמה בוצעה בהצלחה")
        }
        else {
            notify(english ? 'Failed Register': "הרשמה נכשלה")
        }
    }).catch(err => {
        notify(err)
    });
}

const Registration = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="login_page">
            <br />
            <LogoImg2 />
            <br/>
            <LoginForm direction={props.english ? 'ltr' : 'rtl'}>
                <InputField placeholder={props.english ? "Username": 'שם משתמש'} autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)} /><br />
                <InputField type="password" placeholder={props.english ? "Password": 'סיסמה'} autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)} /><br />
                <InputField type="password" placeholder={props.english ? "Confirm Password":' אימות סיסמה'} autocomplete="off" id="cpassword" name="cpassword" onChange={e => setConfirmPassword(e.target.value)} /><br />
                <InputField placeholder={props.english ? "Phone":'פלאפון'} autocomplete="off" id="phone" name="phone" onChange={e => setPhone(e.target.value)} /><br />
                <InputField placeholder={props.english ? "Email":'דואר אלקטרוני'} autocomplete="off" id="email" name="email" onChange={e => setEmail(e.target.value)} /><br /> <br />
                <LoginButton onClick={() => handleRegister(username, password, confirmPassword, email, phone, props.english)}>{props.english ? 'Sign Up' : 'הירשם'}</LoginButton>
            </LoginForm>
            <Footer />
        </div>
    )
}

export default Registration;