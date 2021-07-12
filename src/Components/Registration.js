import React, { useState } from 'react';
import { LogoImg2, LoginForm, InputField, LoginButton } from './index'
import Footer from './../Components/Footer';
import { validatePassword, validateUsername, validatePhone, validateEmail } from './utils'
import config from './../config.json'
import history from './History';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleRegister = async (username, password, confirmPassword, email, phone) => {
    const validateUser = validateUsername(username)
    const validatePass = validatePassword(password)
    const validateEm = validateEmail(email)
    const validatePh = validatePhone(phone)
    if(validateUser !== 'ok'){
        toast.error(`${validateUser}`, {
            position: "bottom-right",
            autoClose: 20000
        });
        return
    }
    if(validatePass !== 'ok'){
        toast.error(`${validatePass}`, {
            position: "bottom-right",
            autoClose: 20000
        });
        return
    }
    if(validateEm !== 'ok'){
        toast.error(`${validateEm}`, {
            position: "bottom-right",
            autoClose: 20000
        });
        return
    }
    if(validatePh !== 'ok'){
        toast.error(`${validatePh}`, {
            position: "bottom-right",
            autoClose: 20000
        });
        return
    }
    if(confirmPassword !== password){
        toast.error('passwords are not identical', {
            position: "bottom-right",
            autoClose: 20000
        });
        return
    }
    await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.register}`,
        data: {
            username: username,
            password: password,
            phone:phone,
            email:email
        } 
    }).then(result => {
        if (result.data) {
            toast.info('Successfully Register', {
                position: "bottom-right",
                autoClose: 20000
            });
            history.push('/')
            window.location.reload()
        }
        else {
            toast.error('Failed Register', {
                position: "bottom-right",
                autoClose: 20000
            });
        }
    }).catch(err => {
        toast.erorr(`${err}`, {
            position: "bottom-right",
            autoClose: 20000
        });
    });
}

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="login_page">
            <ToastContainer />
            <br/>
            <LogoImg2 />
            <br/>
            <LoginForm>
                <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)}/><br/>
                <InputField type="password" placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)}/><br/>
                <InputField type="password" placeholder="Confirm Password" autocomplete="off" id="cpassword" name="cpassword" onChange={e => setConfirmPassword(e.target.value)}/><br/>
                <InputField placeholder="Phone" autocomplete="off" id="phone" name="phone" onChange={e => setPhone(e.target.value)}/><br/>
                <InputField placeholder="Email" autocomplete="off" id="email" name="email" onChange={e => setEmail(e.target.value)}/><br/> <br/>
                <LoginButton onClick={() => handleRegister(username, password, confirmPassword, email, phone)}>Sign Up</LoginButton>
            </LoginForm>
            <Footer />        
        </div>
    )
}

export default Registration;