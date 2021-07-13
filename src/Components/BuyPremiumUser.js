import React, { useState } from 'react';
import { validatePINcode } from './utils'
import { DirectButton, DirectInput, DirectDiv, DivTitles } from './index'
import config from './../config.json'
import axios from 'axios'
import { notify } from './../LandPage';


const checkMyPincode = async (pin, user) => {
    return await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.checkPinCode}`,
        data: {
            pincode: pin,
            username: user
        }
    }).then(result => {
        if (result) {
            return result.data
        }
    }).catch(err => {
        notify(err)
    });
}

const handlePinCode = async (pincode, setPremium) => {
    if (validatePINcode(pincode)) {
        const username = document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(','))
        if (await checkMyPincode(pincode, username)) {
            document.cookie = `username: ${username}, premium: yesPremium;`
            notify('Successful PIN code')
            setPremium(true);
        }
        else {
            notify('Wrong PIN code')
        }
    }
    else {
        notify('Wrong PIN code')
    }
}

const BuyPremiumUser = (props) => {
    const [pinCode, setPinCode] = useState("")

    return (
        <div style={{ textAlign: "center" }}>
            
            <DivTitles>
                <h1>ARE YOU PREMIUM USER ?!</h1>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If not so this service costs 100₪ (NIS) per month, can be paid (bit, pay, paybox) through the site owner (details in About)</h2>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes <a href="./" style={{ color: 'black' }}>login</a> to website and enter the code you received on your cellphone after making a successful payment</h2>
            </DivTitles>
            <br />
            <DirectDiv>
                <DirectInput placeholder="PIN code" onChange={e => setPinCode(e.target.value)}></DirectInput>
                <br />
                <DirectButton onClick={() => handlePinCode(pinCode, props.setPremium)}>Submit</DirectButton>
            </DirectDiv>
            <br /><br />
            <br /><br />
        </div>
    );
};

export default BuyPremiumUser;