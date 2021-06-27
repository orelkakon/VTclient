import React, {useState} from 'react';
import {validatePINcode} from './utils'


const BuyPremiumUser = (props) => {
    const [pinCode,setPinCode] = useState("")
    const handlePinCode = (pincode) => {
        validatePINcode(pincode) && props.setPremium(true)
    }
    return (
        <div style={{textAlign:"center"}}> 
            <h1>Sorry you are not a premium user!</h1>
            <h2>The service costs 50 NIS, can be paid (bit, pay, paybox) through the site owner (details in About)</h2>
            <h3>Enter the code you received on your cell phone after making a successful payment</h3>
            <input placeholder="PIN code" onChange={e => setPinCode(e.target.value)}></input>
            <button onClick={()=> handlePinCode(pinCode)}>press</button>
        </div>
    );
};

export default BuyPremiumUser;