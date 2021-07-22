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

const handlePinCode = async (pincode, setPremium, english) => {
    if (validatePINcode(pincode)) {
        const username = sessionStorage.getItem('session').substring(sessionStorage.getItem('session').indexOf(' ') + 1, sessionStorage.getItem('session').indexOf(','))
        if (await checkMyPincode(pincode, username)) {
            sessionStorage.setItem('session', `username: ${username}, premium: yesPremium;`)
            notify(english ? 'Successful PIN code' : "קוד גישה תקין")
            setPremium(true);
        }
        else {
            notify(english ? 'Wrong PIN code' : "קוד גישה שגוי")
        }
    }
    else {
        notify(english ? 'Wrong PIN code' : "קוד גישה שגוי")
    }
}

const BuyPremiumUser = (props) => {
    const [pinCode, setPinCode] = useState("")

    return (
        <div style={{ textAlign: "center" }}>

            <DivTitles style={{ direction: props.english ? 'ltr' : 'rtl' }}>
                {props.english ?
                    <>
                        <h1>ARE YOU PREMIUM USER ??</h1>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>If not so this service costs 150₪ (NIS) per month, can be paid (bit, pay, paybox) through the site owner (details in About)</h2>
                        {
                            sessionStorage.getItem('session') ?
                                <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes enter the code you received on your cellphone after making a successful payment</h2>
                                :
                                <h2 style={{ fontFamily: "Comic Sans MS" }}>If yes <a href="./" style={{ color: 'black' }}>login</a> to website and enter the code you received on your cellphone after making a successful payment</h2>
                        }
                    </>
                    :
                    <>
                        <h1>האם אתה משתמש מנוי ??</h1>
                        <h2 style={{ fontFamily: "Comic Sans MS" }}>אם לא, ניתן לקנות את השירות ב-150 ש"ח לחודש, ניתן לשלם (ביט, פאי, פאיבוקס, העברה בנקאית) דרך הפרטים ליצירת קשר שנמצאים באודות</h2>
                        {
                            sessionStorage.getItem('session') ?
                                <h2 style={{ fontFamily: "Comic Sans MS" }}>אם כן, הזן את הקוד שקיבלת ב-פלאפון שלך לאחר ביצוע עסקת תשלום מוצלחת</h2>
                                :
                                <h2 style={{ fontFamily: "Comic Sans MS" }}>אם כן, <a href="./" style={{ color: 'black' }}> התחבר</a> לאתר והזן את הקוד שקיבלת ב-פלאפון שלך לאחר ביצוע עסקת תשלום מוצלחת</h2>
                        }
                    </>
                }
            </DivTitles>
            <br />
            <DirectDiv style={{ direction: props.english ? 'ltr' : 'rtl' }}>
                <DirectInput placeholder={props.english ? "PIN code" : "קוד גישה"} onChange={e => setPinCode(e.target.value)}></DirectInput>
                <br />
                <DirectButton onClick={() => handlePinCode(pinCode, props.setPremium, props.english)}>{props.english ? 'Submit' : "שלח"}</DirectButton>
            </DirectDiv>
            <br /><br />
            <br /><br />
        </div>
    );
};

export default BuyPremiumUser;