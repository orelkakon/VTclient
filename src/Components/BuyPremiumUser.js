import React, { useState } from 'react';
import { validatePINcode } from './utils'
import { DirectButton, DirectInput, DirectDiv, DivTitles } from './index'
import config from './../config.json'
import axios from 'axios'

const getMyPincode = async (user) => {
    return await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getMyPinCode}`,
        data: {
            username: user
        }
    }).then(result => {
        if (result.data) {
            return result.data
        }
        else {
            alert('Failed get pin code')
        }
    }).catch(err => {
        alert(err);
    });
}

const BuyPremiumUser = (props) => {
    const [pinCode, setPinCode] = useState("")
    const handlePinCode = async (pincode) => {
        if (validatePINcode(pincode)) {
            const username = document.cookie.substring(document.cookie.indexOf(' ') + 1, document.cookie.indexOf(','))
            if (pincode === await getMyPincode(username)) {
                props.setPremium(true)
                alert("Successful PIN code")
            }
            else {
                alert("Wrong PIN code")
            }
        }
        else {
            alert("Wrong PIN code")
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <DivTitles>
                <h1>ARE YOU PREMIUM USER ?!</h1>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If not so the service costs 50 NIS per month, can be paid (bit, pay, paybox) through the site owner (details in About)</h2>
                <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes enter the code you received on your cellphone after making a successful payment</h2>
            </DivTitles>
            <br />
            <DirectDiv>
                <DirectInput placeholder="PIN code" onChange={e => setPinCode(e.target.value)}></DirectInput>
                <br />
                <DirectButton onClick={() => handlePinCode(pinCode)}>Submit</DirectButton>
            </DirectDiv>
            <br /><br />
            <br /><br />
        </div>
    );
};

export default BuyPremiumUser;